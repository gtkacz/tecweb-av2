from django.db import models
from django.utils.timezone import now
from datetime import date
from time import time


class Country(models.Model):
    name = models.CharField(max_length=50, unique=True)
    name_pt = models.CharField(max_length=50, unique=True, null=True)
    flag_url = models.URLField(null=True)
    flag_url_shiny = models.URLField(null=True)
    flag_url_big = models.URLField(null=True)
    flag_url_big_shiny = models.URLField(null=True)
    rank = models.PositiveSmallIntegerField()
    population = models.PositiveIntegerField()
    
    total_cases = models.PositiveIntegerField()
    new_cases = models.PositiveIntegerField()
    active_cases = models.PositiveIntegerField()
    cases_1m_pop = models.PositiveIntegerField()
    
    total_deaths = models.PositiveIntegerField()
    new_deaths = models.PositiveIntegerField()
    deaths_1m_pop = models.PositiveIntegerField()
    
    total_recovered = models.PositiveIntegerField()
    new_recovered = models.PositiveIntegerField()
    
    infection_risk = models.FloatField()
    case_fatality_rate = models.FloatField()
    recovery_proportion = models.FloatField()
    
    total_vaccinated = models.PositiveIntegerField(null=True)
    vaccinated_proportion = models.FloatField(null=True)
    vaccinated_1m_pop = models.PositiveIntegerField(null=True)
    daily_vaccinated_1m_pop = models.PositiveIntegerField(null=True)
    
    def __str__(self):
        return f'{self.id}.{self.name}'
    
class Subscriber(models.Model):
    name = models.CharField(max_length=50, blank=True, default='')
    email = models.EmailField()
    specific_country = models.CharField(max_length=50, blank=True, default='')
    all_countries = models.BooleanField()
    interval = models.PositiveSmallIntegerField()
    
class LastModified(models.Model):
    last_modified_data = models.CharField(max_length=20, default=date.today())