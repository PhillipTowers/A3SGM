from rest_framework import serializers
from .models import Postulante

class PostulanteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Postulante
        fields = '__all__'  # Incluye todos los campos del modelo
