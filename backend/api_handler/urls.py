from django.urls import path
from api_handler import views

urlpatterns = [
    path('getTenQuestions/', views.QuestionsApi),
]