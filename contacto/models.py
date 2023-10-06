from django.db import models

class Contacto(models.Model):
    nameStore = models.CharField(max_length=100)
    cellPhone = models.CharField(max_length=12)
    email= models.CharField(max_length=100)
