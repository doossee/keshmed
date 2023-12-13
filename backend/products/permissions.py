from rest_framework import permissions

class IsAdminOrReadOnly(permissions.BasePermission):

    """Admin can change the object and all can view list of objects"""

    def has_permission(self, request, view):
        return bool(
            request.method in permissions.SAFE_METHODS or
            request.user and request.user.is_staff
        )
    
    def has_object_permission(self, request, view, obj):
        return bool(
            request.method in permissions.SAFE_METHODS or
            request.user and request.user.is_staff
        )