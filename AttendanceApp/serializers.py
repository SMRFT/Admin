from curses.ascii import EM
from rest_framework import serializers
from AttendanceApp.models import Employee,Admin

class EmployeeSerializer(serializers.ModelSerializer):
    class Meta:
        model=Employee
        fields=('id','name','mobile','designation','address','userimage','userimgname')


class EmployeeShowSerializer(serializers.ModelSerializer):
    class Meta:
        model=Employee
        fields=('id','name','mobile','designation','address')

        
class AdminSerializer(serializers.ModelSerializer):
    class Meta:
        model = Admin
        fields = [ 'name', 'email', 'password']
        extra_kwargs = {
            'password': {'write_only': True}
        }

    def create(self, validated_data):
        password = validated_data.pop('password', None)
        instance = self.Meta.model(**validated_data)
        if password is not None:
            instance.set_password(password)
        instance.save()
        return instance


