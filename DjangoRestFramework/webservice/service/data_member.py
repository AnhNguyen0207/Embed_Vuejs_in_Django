from django.core import serializers
from rest_framework import status
from rest_framework.response import Response

from ..models import Member


def getListMember():
    try:
        memberList = Member.objects.all().values()
        return {
            'list_member': memberList
        }
    except Exception as e:
        error_message = str(e)
        return {'error': error_message}


def getMemberDetail(id):
    try:
        memberDetail = Member.objects.values().get(pk=id)
        return {
            'member': memberDetail
        }
    except Exception as e:
        error_message = str(e)
        return {'error': error_message}


def createMember(data):
    Member(
        user_name=data['user_name'],
        contact_number=data['contact_number'],
        home_town=data['home_town'],
    ).save()
    return {"message": "success"}


def updateMember(data):
    try:
        member = Member.objects.get(pk=data['id'])
        member.user_name = data['user_name']
        member.contact_number = data['contact_number']
        member.home_town = data['home_town']
        member.save()
        return True
    except Exception as e:
        error_message = str(e)
        return False


def deleteMember(id):
    try:
        member = Member.objects.get(pk=id)
        member.delete()
        return Response({'message': 'success'}, status=status.HTTP_200_OK)
    except Exception as e:
        error_message = str(e)
        return Response({'error': error_message}, status=status.HTTP_400_BAD_REQUEST)

