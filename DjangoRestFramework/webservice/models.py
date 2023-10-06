from django.db import models


# Create your models here.

class Member(models.Model):
    user_name = models.CharField(max_length=255)
    contact_number = models.CharField(max_length=255)
    home_town = models.CharField(max_length=255)



