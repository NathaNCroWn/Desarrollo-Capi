from django.db import models
from usuario.models import Usuario
from productos.models import Productos

class Contizacion(models.Model):
    userCt =  models.ForeignKey(Usuario, on_delete=models.SET_NULL, null=True)
    nameProductCt= models.ForeignKey(Productos, on_delete=models.SET_NULL, null=True)
    imgProductCt=models.ImageField(null=True, blank=True)
    valorCt= models.FloatField(null=True)
