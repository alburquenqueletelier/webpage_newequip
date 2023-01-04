from django.shortcuts import render

# import user and group standard models
from django.contrib.auth import get_user_model
from django.contrib.auth.models import Group

User = get_user_model()
# import restframework
from rest_framework import viewsets
from rest_framework import permissions
from api.serializers import UserSerializer, GroupSerializer

# Create your views here.
def front(request):
    context = { }
    return render(request, "index.html", context)


# Models Views
class UserViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = User.objects.all().order_by('-date_joined')
    serializer_class = UserSerializer
    # permission_classes = [permissions.IsAuthenticated] #Specific permission


class GroupViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows groups to be viewed or edited.
    """
    queryset = Group.objects.all()
    serializer_class = GroupSerializer
    # permission_classes = [permissions.IsAuthenticated] #Specific permission 

