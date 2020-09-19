from .models import Todo
from .permissions import IsAuthorOrReadOnly
from .serializers import TodoSerializer, UserSerializer
from django.contrib.auth import get_user_model
from rest_framework import viewsets


class TodoViewSet(viewsets.ModelViewSet):
    permission_classes = (IsAuthorOrReadOnly,)
    queryset = Todo.objects.all()
    serializer_class = TodoSerializer


class UserViewSet(viewsets.ModelViewSet):
    permission_classes = (IsAuthorOrReadOnly,)
    queryset = get_user_model().objects.all()
    serializer_class = UserSerializer
