from django.contrib import admin

from .models import AccountUser

@admin.register(AccountUser)
class AccountUserAdmin(admin.ModelAdmin):
    pass