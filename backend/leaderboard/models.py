from django.db import models

# Create your models here.

class CountryLeaderboard(models.Model):
    EntryId = models.AutoField(primary_key=True)
    Username = models.CharField(max_length=10, blank=False)
    Score = models.IntegerField()

class SlidingPuzzleLeaderBoard(models.Model):
    EntryId = models.AutoField(primary_key=True)
    Username = models.CharField(max_length=10, blank=False)
    Score = models.IntegerField()

