from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .products import products


@api_view(['GET'])
def getRoutes(request):
    return Response({"message": "success"})


@api_view(['GET'])
def getProducts(request):
    return Response(products)


@api_view(['GET'])
def get_product(request, pk):
    result = None
    for product in products:
        if product['_id'] == pk:
            result = product

    return Response(result)
