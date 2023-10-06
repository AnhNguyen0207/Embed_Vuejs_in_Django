from graphene import Field, Int, String, Mutation
from graphene_django.types import ObjectType
from .model.model import MemberType
from webservice.models import Member
from graphql_jwt import ObtainJSONWebToken, Refresh, Verify


class CreateOrUpdateMember(Mutation):
    class Arguments:
        id = Int()
        userName = String()
        contactNumber = String()
        homeTown = String()

    member = Field(MemberType)

    def mutate(self, info, id, userName, contactNumber, homeTown):
        if id is None:
            member = Member(user_name=userName, contact_number=contactNumber, home_town=homeTown)
        else:
            member = Member.objects.get(pk=int(id))
            member.user_name = userName
            member.contact_number = contactNumber
            member.home_town = homeTown
        member.save()
        return CreateOrUpdateMember(member=member)


class DeleteMember(Mutation):
    class Arguments:
        id = Int()

    msg = String()

    def mutate(self, info, id):
        try:
            member = Member.objects.get(pk=id)
            member.delete()
            msg = "success"
        except Exception as e:
            msg = str(e)
        return DeleteMember(msg=msg)


class Mutation(ObjectType):
    login = ObtainJSONWebToken.Field()
    refresh_token = Refresh.Field()
    verify_token = Verify.Field()
    create_or_update_member = CreateOrUpdateMember.Field()
    delete_member = DeleteMember.Field()
