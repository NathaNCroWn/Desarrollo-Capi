from django.db import models

class Contizacion(models.Model):
    userCt =  models.CharField(max_length=(100))
    nameProductCt= models.IntegerField
    imgProductCt=models.ImageField
    valorCt= models.DecimalField
