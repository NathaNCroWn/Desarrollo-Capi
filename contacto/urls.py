from django.urls import path
from . import views

urlpatterns = [
    path('get/', views.get_contacto),
    path('create/', views.create_contacto),
    path('update/<int:id>', views.update_contacto),
    path('delete/<int:id>', views.delete_contacto)
]
