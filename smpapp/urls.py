from django.contrib import admin
from django.urls import path
from django.conf.urls import url

from smpapp.views import *

urlpatterns = [
    url(r'^$', index.as_view(), name='index'),
    url(r'^simulacionmanual/$', simulacionmanual.as_view(), name='simulacionmanual'),
    url(r'^sobre/$', sobre.as_view(), name='sobre'),
]