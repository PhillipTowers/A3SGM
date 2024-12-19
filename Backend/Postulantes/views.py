from rest_framework import viewsets
from .models import Postulante
from .serializers import PostulanteSerializer

class PostulanteViewSet(viewsets.ModelViewSet):
    queryset = Postulante.objects.all()
    serializer_class = PostulanteSerializer
