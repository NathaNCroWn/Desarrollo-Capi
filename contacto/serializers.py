from rest_framework import serializers
from .  models import Contacto

class ContectoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contacto
        fields = '__all__'