from django.urls import path
from . import views
from rest_framework_simplejwt.views import TokenRefreshView

urlpatterns = [
    path('register/', views.register_Usuarios),
    path('login/', views.LoginView.as_view ()),
    path('refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]
