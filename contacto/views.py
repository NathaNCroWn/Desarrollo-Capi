from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import Contacto
from .serializers import ContactoSerializer
from rest_framework import status

@api_view(['POST'])
def register_Contacto(request):
    contacto= ContactoSerializer(data=request.data)
    if contacto.is_valid():
        contacto.save()
        return Response(contacto.data)
    

@api_view(['GET'])
def get_Contacto(request):
    contacto = Contacto.objects.all()
    serializer = ContactoSerializer(contacto, many=True)
    return Response (serializer.data)

@api_view(['PUT'])
def update_Contacto(request, id):
    contacto = Contacto.objects.get(id=id)
    serializer = ContactoSerializer(contacto, data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
@api_view(['DELETE'])
def delete_Contacto(request, id):
    contacto= Contacto.objects.get(id=id)
    contacto.delete()
    return Response ({'detail':'la cotizacion se elimino correctamente'}, status=status.HTTP_204_NO_CONTENT)