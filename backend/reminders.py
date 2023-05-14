import requests
import os
from supabase import create_client, Client
from pprint import pprint
from napkin import response, request
from datetime import datetime, timedelta

url: str = ("https://itboyrbpneggaqiewgem.supabase.co")
key: str = ("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml0Ym95cmJwbmVnZ2FxaWV3Z2VtIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODM5MTc4NjMsImV4cCI6MTk5OTQ5Mzg2M30.AcGc-CnMgplg9UxfZ_N34w1iEAL19z2FRc1iIl1YuhU")
supabase: Client = create_client(url, key)

def main():
    reminders = []
    reminder_1 = {
        "type": "reminder",
        "message": "Don't forget to water your plants today!",
        "icons": ["watering", "watering", "watering", "watering"],
        "color": "#cce5ff50"
    }
    reminder_2 = {
        "type": "info",
        "message": "Did you know that you can use your own compost to fertilize your plants?",
        "icons": [],
        "color": "#cce5ff50"
    }
    reminder_3 = {
        "type": "danger",
        "message": "Attention there will be a storm in your area today, don't forget to protect your plants!",
        "icons": [],
        "color": "#f8d7da50"
    }
    reminder_4 = {
        "type": "planting",
        "message": "It's time to plant your tomatoes, carrots!",
        "icons": ["tomatoes", "carrots"],
        "color": "#d4edda50"
    }
    reminder_5 = {
        "type": "fetching",
        "message": "It's time to fetch your potatoes, beans!",
        "icons": ["potatoes", "beans"],
        "color": "#d4edda50"
    }
    reminder_6 = {
    "type": "warning",
    "message": "In the next few days the temperatures will be extremely high.",
    "icons": [],
    "color": "#fff3cd50"
    }
    reminders.append(reminder_1)
    #reminders.append(reminder_2)
    reminders.append(reminder_6)
    reminders.append(reminder_3)
    reminders.append(reminder_4)
    reminders.append(reminder_5)

    response.body = reminders


main()
