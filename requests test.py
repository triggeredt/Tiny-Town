import requests
print('POST http://localhost:8000/treasurehunt/login/')
r = requests.post('http://localhost:8000/treasurehunt/login/',auth=('jg12g22','admin'))
print(r.text)
json_auth_response = r.json()
headers = {'Authorization': 'Token ' + json_auth_response['token']}
print('GET http://localhost:8000/treasurehunt/code/')
r = requests.get('http://localhost:8000/treasurehunt/code/',headers=headers)
print(r.text)
print('GET http://localhost:8000/treasurehunt/codefind/')
r = requests.get('http://localhost:8000/treasurehunt/codefind/',headers=headers)
print(r.text)
print('POST http://localhost:8000/treasurehunt/logout/')
r = requests.post('http://localhost:8000/treasurehunt/logout/',headers=headers)
print(r.text)
print('GET http://localhost:8000/treasurehunt/code/')
r = requests.get('http://localhost:8000/treasurehunt/code/',headers=headers)
print(r.text)
input('END')