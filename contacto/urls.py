from django.urls import path
from . import views

urlpatterns = [
    path('get/', views.get_Contacto),
    path('create/', views.register_Contacto),
    path('update/<int:id>', views.update_Contacto),
    path('delete/<int:id>', views.delete_Contacto)
]
