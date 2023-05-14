from __future__ import print_function
import httplib2
import os

from apiclient import discovery
from oauth2client import client
from oauth2client import tools
from oauth2client.file import Storage

import datetime
import calendar

SCOPES = 'https://www.googleapis.com/auth/calendar.readonly'
CLIENT_SECRET_FILE = 'client_secret.json'
APPLICATION_NAME = 'AAA'
SERVICE_ACCOUNT_ID = "xxx@xxx.com"
CALENDAR_ID= ['aaa@aaa',
              bbb@bbb,
              ccc@ccc
            ]

def get_credentials_OAuth2():
    store = Storage(CLIENT_SECRET_FILE)
    credentials = store.get()
    if not credentials or credentials.invalid:
        flow = client.flow_from_clientsecrets(CLIENT_SECRET_FILE, SCOPES)
        flow.user_agent = APPLICATION_NAME
        credentials = tools.run(flow, store)
    return credentials

def get_credentials_serviceAccount():
    scopes = 'https://www.googleapis.com/auth/calendar'
    credentials = ServiceAccountCredentials.from_json_keyfile_name('key.json',scopes)
    return credentials

  
def lambda_handler(event, context):
    credentials = get_credentials_OAuth2()
#     credentials = get_credentials_serviceAccount()
    http = credentials.authorize(httplib2.Http())
    service = discovery.build('calendar', 'v3', http=http)

    d = datetime.date.today()
    weekday = d.weekday()
    if weekday == calendar.SUNDAY:
        print(d)
    else:
        delta = datetime.timedelta(7 - (calendar.SUNDAY - weekday))
        d = d - delta

    timeMin = d
    timeMax = d + datetime.timedelta(7)
    timeMin = timeMin.isoformat() + 'T' + '00:00:00.000000' + 'Z'
    timeMax = timeMax.isoformat() + 'T' + '00:00:00.000000' + 'Z'

    eventsResult = []
    for id in CALENDAR_ID:
        e = service.events().list(
            calendarId=id, timeMin=timeMin, timeMax=timeMax, maxResults=50, singleEvents=True,
            orderBy='startTime').execute()
        eventsResult += e.get('items', [])
    return eventsResult

if __name__ == '__main__':
    events = lambda_handler('','')
    for event in events:
        if event['start'].get('dateTime', False):
            print(event['start']['dateTime'], event['end']['dateTime'], event['summary'], event['organizer'].get('displayName'))
        else:
            print(event['start']['date'], event['end']['date'], event['summary'], event['organizer'].get('displayName')
