from django.urls import path
from . import views

urlpatterns = [
    path('get/', views.get_cotizacion),
    path('create/', views.create_cotizacion),
    path('update/<int:id>', views.update_cotizacion),
    path('delete/<int:id>', views.delete_cotizacion)
]
