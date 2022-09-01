from rest_framework import serializers;
from leaderboard.models import CountryLeaderboard, SlidingPuzzleLeaderBoard

class CountryLeaderboardSerializer(serializers.ModelSerializer):
    class Meta:
        model = CountryLeaderboard
        fields = ('Username', 'Score')

class SlidingPuzzleLeaderboardSerializer(serializers.ModelSerializer):
    class Meta:
        model = SlidingPuzzleLeaderBoard
        fields = ('Username', 'Score')

