from unicodedata import name
from django.urls import path, include

# rest framework imports
from rest_framework import routers

# import views or use from api.views import specific_views
from api import views

router = routers.DefaultRouter()
router.register(r'users', views.UserViewSet)
router.register(r'groups', views.GroupViewSet)

urlpatterns = [
    path("", views.front, name="frontend"),
    path('api/', include(router.urls)),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework'))
]