from django.urls import path
from rest_framework.routers import SimpleRouter
from .views import UserViewSet, TodoViewSet

router = SimpleRouter()

router.register('users', UserViewSet, basename='users')
router.register('', TodoViewSet, basename='todos')

urlpatterns = router.urls
