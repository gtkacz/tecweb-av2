"""covid19 URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from django.shortcuts import render
from stats import views

urlpatterns = [
    path('', views.index, name='index'),
    path('country/<str:country_name>', views.country_view, name='country'),
    path('admin/', admin.site.urls),
    path('api/countries/<int:country_id>/', views.api_country),
    path('api/sortby<int:country_id>/', views.api_country),
    path('subscribe/', views.subscribe),
    path('about/', views.about),
    path('sortby=<str:sortvalue>/', views.sortby),
]

def notfound(request, exception=None):
    return render(request, 'stats/templates/stats/404.html')

handler404 = notfound