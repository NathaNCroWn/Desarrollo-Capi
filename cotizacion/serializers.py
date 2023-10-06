from rest_framework import serializers
from .  models import Contizacion

class ContizacionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contizacion
        fields = '__all__'