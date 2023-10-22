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

@api_view(['GET'])
def get_Usuario(request):
    usuario = Usuario.objects.all()
    serializer = UsuarioSerializer(usuario, many=True)
    return Response (serializer.data)

@api_view(['PUT'])
def update_Usuario(request, id):
    usuario = Usuario.objects.get(id=id)
    serializer = UsuarioSerializer(usuario, data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
@api_view(['DELETE'])
def delete_Usuarios(request, id):
    usuario= Usuario.objects.get(id=id)
    usuario.delete()
    return Response ({'detail':'el usuario se elimino correctamente'}, status=status.HTTP_204_NO_CONTENT)