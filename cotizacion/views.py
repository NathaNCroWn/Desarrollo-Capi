from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import Contizacion
from .serializers import ContizacionSerializer
from rest_framework import status

@api_view(['GET'])
def get_cotizacion(request):
    contizacion = Contizacion.objects.all()
    serializer = ContizacionSerializer(contizacion, many=True)
    return Response (serializer.data)

@api_view(['POST'])
def create_cotizacion(request):
    serializer = ContizacionSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['PUT'])
def update_cotizacion(request, id):
    try:
        cotizacion = Contizacion.objects.get(id=id)
    except Contizacion.DoesNotExist:
        return Response ({'detail': 'la cotizacion que desea actializar no existe'}, status=status.HTTP_404_NOT_FOUND)
    
    serializer = ContizacionSerializer(cotizacion, data=request.data)
    if serializer.is_valid:
        serializer.save()
        return Response(serializer.data)
    return Response(serializer.erros, status=status.HTTP_400_BAD_REQUEST)

@api_view(['DELETE'])
def delete_cotizacion(request, id):
    contizacion= Contizacion.objects.get(id=id)
    contizacion.delete()
    return Response ({'detail':'la cotizacion se elimino correctamente'}, status=status.HTTP_204_NO_CONTENT)