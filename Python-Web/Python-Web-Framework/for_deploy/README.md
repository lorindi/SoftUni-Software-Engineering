Here is the documentation with some of the suggestions applied:

# Deploying a Django Application to AWS with Docker and Nginx

## Requirements

- Basic knowledge of Python, Django, Docker, and AWS
- Docker installed locally
- Docker Hub account
- AWS account with configured IAM user

## Application Preparation

Several changes need to be made to the Django application before it can be deployed.

### Install Gunicorn

Gunicorn will be used as the production WSGI server instead of Django's built-in development server. Install it by running:

```py
pip install gunicorn
```

### Environment Variables

Create a `.env` file to store environment variables:

```bash
DEBUG=False 
SECRET_KEY=your_secret_key
ALLOWED_HOSTS=www.example.com localhost 127.0.0.1
DATABASE_URL=postgres://user:pass@localhost/db  
```

### requirements.txt

Generate `requirements.txt` to hold Python dependencies:

```bash
pip freeze > requirements.txt
```

When the app is deployed, these packages can be installed using:

```bash
pip install -r requirements.txt
```

### settings.py

Make the following changes to `settings.py`:

1. Set `DEBUG = False`

2. Configure `ALLOWED_HOSTS` to allow the domain name

3. Add `example.com` to `CSRF_TRUSTED_ORIGINS`

4. Convert database settings to use environment variables

5. Set `STATIC_ROOT` to `/path/to/static/`

6. Add routes for `/login/` and `/register/`

### Load Environment Variables

Install and configure `django-dotenv` to load `.env` variables.

## Dockerize the Application

Docker will be used to package the app into an image for easy deployment.

### Dockerfile

Create a `Dockerfile` like:

```Dockerfile
FROM python:3.6

ENV PYTHONBUFFERED 1

WORKDIR /app

COPY requirements.txt /app/
RUN pip install -r requirements.txt

COPY . /app/
```

### Docker Compose

Define services in `docker-compose.yml`:

```yaml
version: '3'

services:

  web:
    build: .
    command: gunicorn app.wsgi:application
    env_file: 
      - .env
  
  db:
    image: postgres:10.4
```

And in `docker-compose.prod.yml`:

```yaml
web:
  ports:
   - 8000:8000

db:
  volumes:
    - ./data:/var/lib/postgresql/data
```

This separates development and production environments.

Build images:

```bash
docker-compose -f docker-compose.yml -f docker-compose.prod.yml build
```

Run for testing:

```bash
docker-compose up
```

## Deploy to AWS EC2

1. Launch an Ubuntu 18.04 EC2 instance and connect via SSH.

2. Install Docker on the instance:

```bash
sudo snap install docker
```

3. Pull the Docker image from Docker Hub:

```bash
docker pull yourname/app:latest
```

4. Configure Nginx to proxy requests:

```nginx
upstream app_server {
  server localhost:8000;
}

server {
  listen 80;

  location / {
    proxy_pass http://app_server;
  }
} 
```

5. Run the container:

```bash
docker run -p 8000:8000 app
```

6. Migrate the database and collect static files.

The application is now deployed and accessible on the public EC2 IP!

## Setting Up a Custom Domain with Route 53

To use a custom domain:

1. Purchase a domain name and create an A record in Route 53 pointing to the EC2 public IP.

2. Add the domain name to Nginx's `server_name`.

3. Reconfigure application to allow the domain in `ALLOWED_HOSTS`.

4. Restart Nginx.

The app will now be available at `www.yourdomain.com`.

## Troubleshooting

- If static files are not being served, check that `STATIC_ROOT` matches Nginx's static files path.

- Use `docker logs` to check for errors in running containers.

- Make sure the EC2 security group is allowing incoming HTTP/HTTPS traffic.

Let me know if you have any other questions!
