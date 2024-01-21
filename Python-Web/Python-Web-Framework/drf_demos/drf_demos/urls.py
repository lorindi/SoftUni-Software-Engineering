from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('drf_demos.web.urls')),
    path('accounts/', include('drf_demos.accounts.urls')),
    path('api/', include('drf_demos.api.urls')),
]

'''
REST -> Representational State Transfer
API -> Application Programming Interface

(JSON, XML, YAML)

=> REST API

Author (first_name, last_name)
Book (title, description, author)

# Authors: /authors/

C -> Create author
POST /authors/

R -> Get all authors
GET /authors/

R -> Get author details
GET /authors/{ID}/

{
    'first_name': 'Doncho',
    'last_name': 'Minkov'
}

U -> Update author
PUT /authors/{ID}/
{
    'first_name': 'Doncho 2',
    'last_name': 'Minkov'
}

PATCH /authors/{ID}/
{
    'first_name': 'Doncho 2'
}

D -> Delete author
DELETE /authors/{ID}/

## Actions

POST /authors/{ID}/upvote/

# Summarize:

GET /authors/
POST /authors/

GET /authors/{ID}/
PUT /authors/{ID}/
(PATCH /authors/{ID}/)
DELETE /authors/{ID}/
'''



'''
type2 is a text format (JSON, txt, csv, XML)

Serialization -> obj(type1) -> obj2(type2)
Deserialization -> obj2(type2) -> obj(type1) 

'''


'''
AJAX - Asynchronous JavaScript and XML
'''