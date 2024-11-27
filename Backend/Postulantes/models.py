from django.db import models

class Postulante(models.Model):
    nombre = models.CharField(max_length=100)  # Nombre del postulante
    fecha_contacto = models.DateField()  # Fecha en la que se contactó al postulante
    estado = models.CharField(
        max_length=20,
        choices=[('aprobado', 'Aprobado'), ('pendiente', 'Pendiente')],  # Opciones de estado
        default='pendiente'
    )
    fecha_examen = models.DateField()  # Fecha del examen de ingreso
    entrenamiento_ingreso = models.DateField()  # Fecha del entrenamiento o instrucción básica
    instructor = models.CharField(max_length=100)  # Nombre del instructor
    en_servicio = models.BooleanField(default=True)  # Indica si está activo o no
    observacion = models.TextField(blank=True, null=True)  # Observaciones opcionales del postulante

    def __str__(self):
        return self.nombre  # Representación legible del modelo

