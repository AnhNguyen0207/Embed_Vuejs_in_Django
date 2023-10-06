from graphene import Int, List, Field
from webservice.models import Member
from graphene_django.types import DjangoObjectType, ObjectType


class MemberType(DjangoObjectType):
    class Meta:
        model = Member
        fields = '__all__'


class PaginationType(ObjectType):
    total_member = Int(required=True)
    total_page = Int(required=True)
    page = Int(required=True)
    page_size = Int(required=True)


class MemberListType(ObjectType):
    members = List(MemberType)
    data_page = Field(PaginationType)
