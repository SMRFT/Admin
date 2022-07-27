from rest_framework.views import APIView
from rest_framework.response import Response
from django.views.decorators.csrf import csrf_exempt
import jwt, datetime
from AttendanceApp.models import Employee
from AttendanceApp.serializers import EmployeeShowSerializer
from django.db.models import Q


class RetriveEmp(APIView):
    @csrf_exempt
    def get(self, request):
          emp = Employee.objects.all()
          serializer=EmployeeShowSerializer(emp,many=True)
          return Response(serializer.data)

class EmployeeEditView(APIView):

    @csrf_exempt
    def put(self, request,*args, **kwargs):
        data=request.data        
        user = Employee.objects.get( id =data["id"])
        user.name=data["name"]
        user.mobile=data["mobile"]
        user.designation=data["designation"]
        user.address=data["address"]
        #user=data
        user.save() 
        return Response("Updated Successfully")

        
#Search view

class EmployeeSearchView(APIView):

     @csrf_exempt
     def put(self, request):
        data=request.data        
        
        user = Employee.objects.filter(#Q(id=int(data["key"])) | 
                                          Q(name=data["key"])
                                        | Q(mobile=data["key"])
                                        | Q(designation=data["key"])
                                        | Q(address=data["key"])
                                        ).values()        
        serializer=EmployeeShowSerializer(user,many=True)
        return Response(serializer.data)