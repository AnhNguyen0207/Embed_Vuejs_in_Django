from django.contrib.auth.models import User


def createUser(data):
    try:
        user = User.objects.create_user(data['userName'], '', data['passWord'])
        user.save()
        return {"msg": "Tao thanh cong"}
    except Exception as e:
        error = str(e)
        return {"error": error}
