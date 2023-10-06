from rest_framework_simplejwt.views import TokenObtainPairView
from django.contrib.auth.hashers import make_password
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework.permissions import IsAuthenticated
from rest_framework import status
from .models import Usuario
from .serializers import UsuarioSerializer , RegisterSerializer, MyTokenObtainPairSerializer

@api_view(['POST'])
def register_Usuarios(request):
    data= request.data 
    usuario = Usuario.objects.create(
            name=data['name'],
            lastname=data['lastname'],
            phone=data['phone'],
            username=data['username'],
            password=make_password(data['password'])
        )
    serializer= RegisterSerializer(usuario, many=False)
    return Response(serializer.data, status=status.HTTP_201_CREATED)
    
    
class LoginView(TokenObtainPairView):
    serializer_class= MyTokenObtainPairSerializer
