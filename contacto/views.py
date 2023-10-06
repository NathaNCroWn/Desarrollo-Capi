from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import Contacto
from .serializers import ContectoSerializer
from rest_framework import status

@api_view(['GET'])
def get_contacto(request):
    contacto = Contacto.objects.all()
    serializer = ContectoSerializer(contacto, many=True)
    return Response (serializer.data)

@api_view(['POST'])
def create_contacto(request):
    serializer = ContectoSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['PUT'])
def update_contacto(request, id):
    try:
        contacto = Contacto.objects.get(id=id)
    except Contacto.DoesNotExist:
        return Response ({'detail': 'El contacto que desea actializar no existe'}, status=status.HTTP_404_NOT_FOUND)
    
    serializer = ContectoSerializer(contacto, data=request.data)
    if serializer.is_valid:
        serializer.save()
        return Response(serializer.data)
    return Response(serializer.erros, status=status.HTTP_400_BAD_REQUEST)

@api_view(['DELETE'])
def delete_contacto(request, id):
    contacto= Contacto.objects.get(id=id)
    contacto.delete()
    return Response ({'detail':'El contacto se elimino correctamente'}, status=status.HTTP_204_NO_CONTENT)