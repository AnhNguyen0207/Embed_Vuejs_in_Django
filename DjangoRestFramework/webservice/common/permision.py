from rest_framework.permissions import BasePermission
from webservice.common import field, message_code
from rest_framework_simplejwt.authentication import JWTAuthentication


class IsAuthenticated(BasePermission):
    message = {field.MESSAGE:message_code.PERMISSION_DENIED}
    
    def has_permission(seft, request, view):
        JWT_authenticator = JWTAuthentication()
        response = JWT_authenticator.authenticate(request)
        
        if response is not None:
            return True
        return False