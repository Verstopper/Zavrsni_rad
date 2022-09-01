from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse

from leaderboard.models import CountryLeaderboard, SlidingPuzzleLeaderBoard
from leaderboard.serializers import (CountryLeaderboardSerializer,
                                     SlidingPuzzleLeaderboardSerializer)


@csrf_exempt
def CountryLeaderboardApi(request, id=0):
    if request.method == 'GET':
        country_leaderboard = CountryLeaderboard.objects.all()
        country_leaderboard_serializer = CountryLeaderboardSerializer(
            country_leaderboard, many=True)
        return JsonResponse(country_leaderboard_serializer.data, safe=False)
    elif request.method == 'POST':
        entry_data = JSONParser().parse(request)
        country_leaderboard_serializer = CountryLeaderboardSerializer(
            data=entry_data)
        if country_leaderboard_serializer.is_valid():
            country_leaderboard_serializer.save()
            return JsonResponse("Entry added successfully", safe=False)
        return JsonResponse("Failed to add entry", safe=False)


@csrf_exempt
def SlidingPuzzleLeaderboardApi(request, id=0):
    if request.method == 'GET':
        sliding_puzzle_leaderboard = SlidingPuzzleLeaderBoard.objects.all()
        sliding_puzzle_leaderboard_serializer = SlidingPuzzleLeaderboardSerializer(
            sliding_puzzle_leaderboard, many=True)
        return JsonResponse(sliding_puzzle_leaderboard_serializer.data, safe=False)
    elif request.method == 'POST':
        entry_data = JSONParser().parse(request)
        sliding_puzzle_leaderboard_serializer = SlidingPuzzleLeaderboardSerializer(
            data=entry_data)
        if sliding_puzzle_leaderboard_serializer.is_valid():
            sliding_puzzle_leaderboard_serializer.save()
            return JsonResponse("Entry added successfully", safe=False)
        return JsonResponse("Failed to add entry", safe=False)
