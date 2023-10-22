from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import Contizacion
from .serializers import ContizacionSerializer
from rest_framework import status

@api_view(['POST'])
def register_Cotizacion(request):
    productos= ContizacionSerializer(data=request.data)
    if productos.is_valid():
        productos.save()
        return Response(productos.data)
    

@api_view(['GET'])
def get_Cotizacion(request):
    cotizacion = Contizacion.objects.all()
    serializer = ContizacionSerializer(cotizacion, many=True)
    return Response (serializer.data)

@api_view(['PUT'])
def update_Cotizacion(request, id):
    cotizacion = Contizacion.objects.get(id=id)
    serializer = ContizacionSerializer(cotizacion, data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
@api_view(['DELETE'])
def delete_Cotizacion(request, id):
    cotizacion= Contizacion.objects.get(id=id)
    cotizacion.delete()
    return Response ({'detail':'la cotizacion se elimino correctamente'}, status=status.HTTP_204_NO_CONTENT)