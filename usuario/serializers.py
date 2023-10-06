from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework import serializers
from .models import Usuario

class UsuarioSerializer(serializers.ModelSerializer):
    class Meta:
        model = Usuario
        fields =('id', 'name', 'lastname', 'phone', 'username', 'password', 'avatar' )

class RegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = Usuario
        fields =('name', 'lastname', 'phone', 'username', 'password')

class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls,user):
        token = super().get_token(user)
        token['username']=user.username
        token['is_staff']=user.is_staff
        token['name']=user.name
        token['lastname']=user.lastname
        token['phone']=user.phone
        token['avatar']=user.avatar
        if user.avatar:
            token['avantar'] = user.avatar.url
        else:
            token['avatar'] = None
        return token
