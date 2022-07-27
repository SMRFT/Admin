import imp
from pickle import FROZENSET
from django.conf.urls import url
from django.urls import path, include
from AttendanceApp import views
from AttendanceApp.Views.deteteemp import DeleteEmp
from AttendanceApp.Views.adminview import AdminLogin,AdminReg
from AttendanceApp.Views.retrieveemp import EmployeeEditView, RetriveEmp, EmployeeSearchView
from AttendanceApp.Views.Facerecognition.detection import Detection, Recognition
from .views import EmployeeView
from django.conf.urls.static import static
from django.conf import settings

urlpatterns=[
    


    path('addemp',EmployeeView.as_view()),
    path('showemp',RetriveEmp.as_view()),
    path('delemp',DeleteEmp.as_view()),
    path('det',Detection.as_view()),
    path('reg',Recognition.as_view()),
    path('editemp',EmployeeEditView.as_view()),
    path('searchemployee',EmployeeSearchView.as_view()),
    path('adminreg',AdminReg.as_view()),
    path('adminlog',AdminLogin.as_view()),


    
]+static(settings.MEDIA_URL,document_root=settings.MEDIA_ROOT)