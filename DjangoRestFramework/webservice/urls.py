from django.urls import path
from django.views.decorators.csrf import csrf_exempt
from django.views.generic import TemplateView
from graphene_django.views import GraphQLView
from graphql_jwt.decorators import jwt_cookie
from rest_framework_simplejwt import views as jwt_views

from webservice.schema.schema import schema
from webservice.views import views

urlpatterns = [
    path('api/member', views.getDataMember),
    path('api/member/create', views.createMember),
    path('api/member/update', views.updateMemberById),
    path('api/member/delete', views.deleteMember),
    path('graphql/', csrf_exempt(jwt_cookie(GraphQLView.as_view(graphiql=True, schema=schema)))),
    path('api/member/login/', jwt_views.TokenObtainPairView.as_view(), name='login'),
    path('api/member/token/refresh/', jwt_views.TokenRefreshView.as_view(), name='token_refresh'),

    # using vue router
    path('', TemplateView.as_view(template_name='main.html')),
    path('members', TemplateView.as_view(template_name='main.html')),

]
