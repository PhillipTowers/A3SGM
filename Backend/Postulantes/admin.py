from django.contrib import admin
from .models import Postulante

@admin.register(Postulante)
class PostulanteAdmin(admin.ModelAdmin):
    list_display = ('nombre', 'fecha_contacto', 'estado', 'en_servicio')  # Campos visibles en la lista
    list_filter = ('estado', 'en_servicio')  # Filtros por estado y servicio
    search_fields = ('nombre', 'instructor')  # Campos para búsqueda
