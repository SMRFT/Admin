from django.contrib import admin
from django.urls import path
from django.conf.urls import url,include
from django.views.generic import TemplateView
from .views import index

urlpatterns = [
    path(' ',index),
    path('admin/', admin.site.urls),
    path('',TemplateView.as_view(template_name='index.html')),
    url('attendance/',include('AttendanceApp.urls'))
]
