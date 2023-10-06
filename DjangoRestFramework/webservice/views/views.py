from rest_framework import status
from rest_framework.decorators import api_view, permission_classes
from webservice.common.permision import IsAuthenticated
from rest_framework.response import Response
from ..service import data_member
from ..serializer.member_serializer import MemberSerializer
from ..models import Member
from django.shortcuts import render
from django.views.decorators.cache import never_cache

# Create your views here.
@api_view(['Get'])
@never_cache
# @permission_classes([IsAuthenticated])
def getDataMember(request):
    id = request.GET.get('id')
    if id is not None:
        rs = data_member.getMemberDetail(id)
        return Response(rs, status=status.HTTP_200_OK)
    else:
        rs = data_member.getListMember()
        return Response(rs, status=status.HTTP_200_OK)


@api_view(['Post'])
@permission_classes([IsAuthenticated])
def createMember(request):
    data = request.data
    serializers = MemberSerializer(data=data)
    if serializers.is_valid():
        try:
            serializers.save()
            res = serializers.data
            return Response(res, status=status.HTTP_201_CREATED)
        except Exception as e:
            error_message = str(e)
            return Response({'error': error_message}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
    else:
        return Response(serializers.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['PUT'])
@permission_classes([IsAuthenticated])
def updateMemberById(request):
    try:
        data = request.data
        member_id = int(data.get('id'))
        member = Member.objects.get(pk=member_id)
        if member:
            res = data_member.updateMember(data)
            if res:
                return Response("Update success", status=status.HTTP_200_OK)
            else:
                return Response("Update failed", status=status.HTTP_400_BAD_REQUEST)
        else:
            return Response("Invalid member data", status=status.HTTP_400_BAD_REQUEST)

    except Member.DoesNotExist:
        return Response("Member not found", status=status.HTTP_404_NOT_FOUND)


@api_view(['Delete'])
@permission_classes([IsAuthenticated])
def deleteMember(request):
    id = request.GET.get('id')
    if id is not None:
        try:
            rs = data_member.deleteMember(id)
            return rs
        except Exception as e:
            mss = str(e)
            return Response({'message': mss}, status=status.HTTP_400_BAD_REQUEST)
    else:
        return Response({'error': 'phai nhap id member can xoa'}, status=status.HTTP_400_BAD_REQUEST)


# Using Vue cdn

def testCdn(request):
    return render(request, 'app.html')


def members(request):
    return render(request, 'components/member/ListMember.html')
