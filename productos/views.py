from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import Productos
from .serializers import ProductosSerializer
from rest_framework import status

@api_view(['POST'])
def register_Producto(request):
    productos= ProductosSerializer(data=request.data)
    if productos.is_valid():
        productos.save()
        return Response(productos.data)
    return Response(productos.errors, status=status.HTTP_400_BAD_REQUEST)
    

@api_view(['GET'])
def get_Producto(request):
    productos = Productos.objects.all()
    serializer = ProductosSerializer(productos, many=True)
    return Response (serializer.data)

@api_view(['PUT'])
def update_Producto(request, id):
    productos = Productos.objects.get(id=id)
    serializer = ProductosSerializer(productos, data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
@api_view(['DELETE'])
def delete_Producto(request, id):
    productos= Productos.objects.get(id=id)
    productos.delete()
    return Response ({'detail':'el producto se elimino correctamente'}, status=status.HTTP_204_NO_CONTENT)