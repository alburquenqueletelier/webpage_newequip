# Django-React Boilerplate

This is a template to create React SPA. Use Django in the backend that is responsible for rendering the React application. Include a responsive navbar sticky to the top with Links menu and login form user, a button to test the api that looks for user information, and a responsible footer that wraps to the end of the view port or document as appropriate. It comes configured to use the django user abstract model so modify it if you need to.
Inspired by the [flask-react-hello template](https://github.com/4GeeksAcademy/react-flask-hello) from 4Geeks Academy and post [How to connect Django to ReactJs](https://dev.to/nagatodev/how-to-connect-django-to-reactjs-1a71) from Faruq Abdulsalam's

## Requirements

Built with ```Django 4.1```, ```React 18.2``` and use engine ```Postgres```.  
There is a ***requirements.txt*** file in the root of the project with the libraries used and inside the frontend folder there is the ***package.json***.  
This proyect use **pipenv** to handle virtual enviroments. 

## Installation

Clone this repository
```bash
git clone https://github.com/alburquenqueletelier/django-react-boilerplate.git
```
### 1. Frontend

1. Navigate to the frontend folder and execute: ```npm install```
2. Then execute ```npm run build```  
**Note: execute ```npm run start``` to see if the page is rendered correctly**

### 2. Backend

1. Navigate to the root folder and execute ```pipenv install```  
**Note: You must have pipenv installed in order to use the above command. Install it with ```pip install pipenv```or with the package manager you use.**

2. Enter the postgres console or open de admin and create database named pruebas or any name you want. 
```bash
# First open the local postgres console
psql -h localhost -U postgres
# Then create the database with name "pruebas"
CREATE DATABASE pruebas;
# Exit de postgres console
\q
```

3. Connect Django to the database. In the root proyecto copy the .env.example file into .env
```bash
copy .env.example .env
```

4. Open .env and replace the values, example:
```bash
DEBUG=on # Change false to deployment
SECRET_KEY=set-secret-key-or-use-django-default-key
DATABASE_URL=psql://baal:123456789@localhost:5432/pruebas  #replace the values ​​with your postgres username and password 
```

5. Do the migration, execute ```python manage.py makemigrations``` then ```python manage.py migrate```  
**Note: If the connection to the database fails, the migration will generate a sqlite database that you can see in the root directory.**


## Usage

Run the development at 127.0.0.1:8000 server with ```pipenv run start``` or ```python manage.py runserver```

The frontend uses flux architecture and the backend uses API rest framework. Create functions to connect to api endpoints using environment variable REACT_APP_BACKEND_URL + /api/model_name/

To navigate in views use react-rouder-dom. Django redirects urls it doesn't identify to be handled by react-router-dom. If you navigate to /url_does_not_exist it will show the 404 view

This is a mockup to start your project. It has a button to test the api that fetches the information of the user model. Modify it as you want.

Use django admin page and/or api rest page to handle the models (CRUD).


## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

**Note: There is a bug named ```Manifest: Line: 1, column: 1, Syntax error``` 
that I could not correct. If you can, please send me a message indicating the reason for the error and how to fix it.**

## Contact

Bryan Abel Alburquenque Letelier
alburquenque.letelier@gmail.com
+56979577547
https://www.linkedin.com/in/alburquenque-letelier/

By Baal