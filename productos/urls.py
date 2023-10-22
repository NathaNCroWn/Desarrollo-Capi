from django.urls import path
from . import views

urlpatterns = [
    path('get/', views.get_Producto),
    path('create/', views.register_Producto),
    path('update/<int:id>', views.update_Producto),
    path('delete/<int:id>', views.delete_Producto)
]
