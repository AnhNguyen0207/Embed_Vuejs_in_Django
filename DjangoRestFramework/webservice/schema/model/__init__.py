from graphene import ObjectType, Int


class Pagination(ObjectType):
    total = Int()
    page = Int()
    page_size = Int()
