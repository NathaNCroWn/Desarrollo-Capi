from django.db import models
from usuario.models import Usuario

class Productos(models.Model):
    UserProduct= models.ForeignKey(Usuario, on_delete=models.SET_NULL, null=True)
    productName= models.CharField(max_length=150)
    productImg= models.ImageField(null=True, blank=True)
    productDescription= models.CharField(max_length=1500)
    productDescriptionSimple= models.CharField(max_length=1500)
    price=models.FloatField(null=True)
