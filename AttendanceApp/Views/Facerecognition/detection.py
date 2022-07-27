from tkinter import Y
from compreface import CompreFace
from compreface.service import RecognitionService
from compreface.collections import FaceCollection
from compreface.collections.face_collections import Subjects
from django.http import JsonResponse


DOMAIN: str = 'http://localhost'
PORT: str = '8000'
API_KEY: str = '54cc82e7-9a68-4676-bb75-a3315748598c'

#API_KEY: str = 'da1647cc-856c-4c77-9aa2-0b221cea2754'

compre_face: CompreFace = CompreFace(DOMAIN, PORT)

recognition: RecognitionService = compre_face.init_face_recognition(API_KEY)

face_collection: FaceCollection = recognition.get_face_collection()

subjects: Subjects = recognition.get_subjects()

#print(subjects)


#Rest Process

from rest_framework.views import APIView
from django.views.decorators.csrf import csrf_exempt
from rest_framework.response import Response
from AttendanceApp.models import Employee



class Detection(APIView): #Face saving
    @csrf_exempt
    def post(self, request):
        imp="D:\\User_G\\Applications\\Attendance_management\\Images\\"
        end=".jpg"
        data=request.data        
        face_collection.add(image_path=imp+data["subject"]+end, subject=data["subject"])
        return Response("Profile added to Compreface successfully")
        

class Recognition(APIView):
    @csrf_exempt
    def post(self, request):
        data=request.data        
        x=recognition.recognize(image_path=data["image_path"])
       # print(type(x))
        y=x["result"]
        output=y[0]["subjects"][0]["subject"]
        return Response(output)




