import requests
import os
from supabase import create_client, Client
from pprint import pprint
from napkin import response, request
from datetime import datetime, timedelta

url: str = ("https://itboyrbpneggaqiewgem.supabase.co")
key: str = ("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml0Ym95cmJwbmVnZ2FxaWV3Z2VtIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODM5MTc4NjMsImV4cCI6MTk5OTQ5Mzg2M30.AcGc-CnMgplg9UxfZ_N34w1iEAL19z2FRc1iIl1YuhU")
supabase: Client = create_client(url, key)

def get_garden(garden_id):
    res = supabase.table('gardens').select('*').eq('id', garden_id).execute()
    return res.data[0]

def get_answer(lat, lon, token):
    res = requests.post(
    "https://api.openweathermap.org/data/2.5/forecast",
    params={"lat": lat, "lon": lon, "appid": token},
    )
    if res.ok:
        return(res.json())

# Convert temperature from Kelvin to Celsius
def kelvin_to_celsius(kelvin):
    return round(kelvin - 273.15, 1)

def main():

    # mode current forecast

    garden_id = request.body["garden_id"]
    mode = request.body["mode"]

    garden = get_garden(garden_id)
    lat = garden["lat"]
    lon = garden["long"]
    token = "453c853217812a6443f2d56cb63f8fb0"

    weather = get_answer(lat,lon,token)

    weather_data = []

    # Get dates for next 5 days in format yyyy-mm-dd
    today = datetime.today()
    today_str = today.strftime('%Y-%m-%d')
    dates = []
    for i in range(0, 5):
        day = today + timedelta(days=i)
        dates.append(day.strftime('%Y-%m-%d'))

    if mode == "list":
        for i in range(0, len(weather["list"])):
            weather_obj = {}
            weather_obj["date"] = weather["list"][i]["dt_txt"]
            temp = weather["list"][i]["main"]["temp"]
            weather_obj["temp"] = kelvin_to_celsius(temp)
            weather_obj["humidity"] = weather["list"][i]["main"]["humidity"]
            # Get weather main
            weather_obj["weather_main"] = weather["list"][i]["weather"][0]["main"]
            weather_obj["weather_description"] = weather["list"][i]["weather"][0]["description"]
            # Get rain if it exists
            weather_obj["rain"] = weather["list"][i].get("rain", 0)
            weather_data.append(weather_obj)

        dates_copy = dates.copy()
        new_weather_data = []
        # Keep only one log per day
        for item in weather_data:
            if item["date"][:10] in dates_copy:
                if item["weather_description"] == "clear sky":
                    item["weather_description"] = "clear"
                elif item["weather_description"] == "overcast clouds":
                    item["weather_description"] = "scattered clouds"
                elif item["weather_description"] == "light rain":
                    item["weather_description"] = "shower rain"
                elif item["weather_description"] == "moderate rain":
                    item["weather_description"] = "shower rain"
                new_weather_data.append(item)
                #new_weather_data.append(item)
                dates_copy.remove(item["date"][:10])
        
    elif mode == "single":
        for i in range(0, len(weather["list"])):
            # check if its today log
            if weather["list"][0]["dt_txt"][:10] == today_str:
                weather_obj = {}
                weather_obj["date"] = weather["list"][0]["dt_txt"]
                temp = weather["list"][0]["main"]["temp"]
                weather_obj["temp"] = kelvin_to_celsius(temp)
                weather_obj["humidity"] = weather["list"][0]["main"]["humidity"]
                # Get weather main
                weather_obj["weather_main"] = weather["list"][0]["weather"][0]["main"]
                weather_obj["weather_description"] = weather["list"][0]["weather"][0]["description"]
                # Get rain if it exists
                weather_obj["rain"] = weather["list"][0].get("rain", 0)
                weather_data.append(weather_obj)

        # Only take the first log of the day
        new_weather_data = weather_data[0]

    if len(new_weather_data) == 4:
        new_weather_data.append(new_weather_data[3])

    pprint(len(new_weather_data)) 
    response.body = new_weather_data


main()
