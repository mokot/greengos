
import requests
import os
from supabase import create_client, Client
from pprint import pprint
from napkin import response, request
from datetime import datetime, timedelta

url: str = ("https://itboyrbpneggaqiewgem.supabase.co")
key: str = ("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml0Ym95cmJwbmVnZ2FxaWV3Z2VtIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODM5MTc4NjMsImV4cCI6MTk5OTQ5Mzg2M30.AcGc-CnMgplg9UxfZ_N34w1iEAL19z2FRc1iIl1YuhU")
supabase: Client = create_client(url, key)

def get_crop_agg(user_id):
    res = supabase.table('gardens').select('id').eq('user_id', user_id).execute()
    res_data = res.data
    garden_ids = [garden['id'] for garden in res_data]
    res_crop_percentages = supabase.table('garden_crops').select('*').in_('garden_id', garden_ids).execute()

    crop_data = {
        "1":0,
        "2":0,
        "3":0,
        "4":0,
        "5":0,
        "6":0,
        "7":0,
        "8":0,
        "9":0,
        "10":0
    }

    for item in res_crop_percentages.data:
        crop_id = item['crop_id']
        crop_amount = int(item['amount'].split('%')[0])
        crop_data[str(crop_id)] += crop_amount

    # Divide by number of gardens
    for key in crop_data:
        crop_data[key] = round(crop_data[key] / len(garden_ids),1)

    res_crops = supabase.table('crops').select('*').execute()
    res_crops_data = res_crops.data

    for item in res_crops_data:
        item['percentage'] = crop_data[str(item['id'])]
    return res_crops_data

def main():
    user_id = 1
    data = get_crop_agg(user_id=user_id)
    #pprint(data)


    response.body = data

main()
