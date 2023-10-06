from django.db import models
from django.utils import timezone
from django.contrib.auth.models import ( AbstractBaseUser, BaseUserManager,  PermissionsMixin)

class CustomUserManager(BaseUserManager):
    def _create_user(self,username, password, **extra_fields):
        if not username:
            raise ValueError('Usuario erroneo')
        username= username.lower()
        user= self.model(username=username, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)

        return user
    
    def create_user(self, username=None, password=None, **extra_fields):
        extra_fields.setdefault('is_staff', False)
        return self._create_user(username, password, **extra_fields)
    
    def create_superuser(self, username=None, password=None, **extra_fields):
        extra_fields.setdefault('is_staff', True)
        return self._create_user(username, password, **extra_fields)

class Usuario(AbstractBaseUser):
    name=models.CharField(max_length=100)
    is_staff=models.BooleanField(default=False)
    lastname= models.CharField(max_length=100)
    phone=models.CharField(max_length=16)
    username= models.CharField(max_length=100, unique=(True))
    avatar =models.ImageField(upload_to='avatars/', null=True, blank=True)
    objects = CustomUserManager()
    USERNAME_FIELD='username'
    REQUIRED_FIELDS=[]
