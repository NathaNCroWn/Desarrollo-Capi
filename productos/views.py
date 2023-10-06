from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import Productos
from .serializers import ProductosSerializer
from rest_framework import status

@api_view(['GET'])
def get_productos(request):
    producto = Productos.objects.all()
    serializer = ProductosSerializer(producto, many=True)
    return Response (serializer.data)

@api_view(['POST'])
def create_productos(request):
    serializer = ProductosSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['PUT'])
def update_productos(request, id):
    try:
        producto = Productos.objects.get(id=id)
    except Productos.DoesNotExist:
        return Response ({'detail': 'el producto desea actializar no existe'}, status=status.HTTP_404_NOT_FOUND)
    
    serializer = ProductosSerializer(producto, data=request.data)
    if serializer.is_valid:
        serializer.save()
        return Response(serializer.data)
    return Response(serializer.erros, status=status.HTTP_400_BAD_REQUEST)

@api_view(['DELETE'])
def delete_productos(request, id):
    producto= Productos.objects.get(id=id)
    producto.delete()
    return Response ({'detail':'el producto se elimino correctamente'}, status=status.HTTP_204_NO_CONTENT)