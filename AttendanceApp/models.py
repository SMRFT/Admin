from unittest.util import _MAX_LENGTH
from django.db import models
from django_mongodb_engine.storage import GridFSStorage
from django.contrib.auth.models import AbstractUser

gridfs_storage = GridFSStorage()


# Create your models here.
class Employee(models.Model):
    id = models.AutoField(primary_key=True)
    name= models.CharField(max_length=500)
    mobile = models.CharField(max_length=500)
    designation    = models.CharField(max_length=500)
    address  = models.CharField(max_length=500)
    #img = models.ImageField(storage=GridFSStorage())
    userimage = models.ImageField()
    userimgname = models.CharField(max_length=500)

#Admin Login

class Admin(AbstractUser):
    name = models.CharField(max_length=500)
    email = models.CharField(max_length=500,unique=True)
    password=models.CharField(max_length=500)
    username=None
    
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []