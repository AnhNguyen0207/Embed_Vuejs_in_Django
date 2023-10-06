from graphene import Field, Int
from graphene_django.types import ObjectType
from .model.model import MemberType, PaginationType, MemberListType
from webservice.models import Member


class Query(ObjectType):
    list_member = Field(MemberListType, page=Int(), page_size=Int())
    member_detail = Field(MemberType, id=Int())

    def resolve_list_member(self, info, page, page_size):
        start_index = (page - 1) * page_size
        end_index = start_index + page_size
        list_member = Member.objects.all()[start_index:end_index]

        total_members = Member.objects.count()
        total_pages = (total_members + page_size - 1) // page_size

        data_page = PaginationType(
            total_member=total_members,
            total_page=total_pages,
            page=page,
            page_size=page_size,
        )
        return MemberListType(members=list_member, data_page=data_page)

    def resolve_member_detail(self, info, id):
        return Member.objects.get(pk=id)

