from django.urls import path
from . import views

urlpatterns = [
    path('get/', views.get_productos),
    path('create/', views.create_productos),
    path('update/<int:id>', views.update_productos),
    path('delete/<int:id>', views.delete_productos)
]
