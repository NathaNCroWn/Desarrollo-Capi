from django.urls import path
from . import views

urlpatterns = [
    path('get/', views.get_Cotizacion),
    path('create/', views.create_Cotizacion),
    path('update/<int:id>', views.update_Cotizacion),
    path('delete/<int:id>', views.delete_Cotizacion)
]
