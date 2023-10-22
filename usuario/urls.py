from django.urls import path
from . import views
from rest_framework_simplejwt.views import TokenRefreshView

urlpatterns = [
    path('register/', views.register_Usuarios),
    path('login/', views.LoginView.as_view ()),
    path('get/', views.get_Usuario),
    path('update/<int:id>', views.update_Usuario),
    path('delete/<int:id>', views.delete_Usuarios),
    path('refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]
