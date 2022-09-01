from django.urls import path
from leaderboard import views

urlpatterns = [
    path('countryleaderboard/', views.CountryLeaderboardApi),
    path('slidingpuzzleleaderboard/', views.SlidingPuzzleLeaderboardApi)
]

