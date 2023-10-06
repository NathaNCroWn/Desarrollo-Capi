from django.db import models

class Productos(models.Model):
    UserProduct= models.IntegerField
    productName= models.CharField(max_length=150)
    productImg= models.ImageField
    productDescription= models.CharField(max_length=1500)
    productDescriptionSimple= models.CharField(max_length=1500)
    price=models.DecimalField
