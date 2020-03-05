# Mock Mirror

A test application to simulate APIs

# Setup

Clone repo:
```
git clone git@github.com:thiagomr/mock-mirror.git && cd mock-mirror
```
Install dependencies:
```
npm install
```
Add a .env file (See .env.sample example).

Run in development mode:
```
npm run start:dev
```

# Run with Docker

Run API and Mongo services with docker-compose using make.sh script (You can use .env.sample on .env file):
```
bash make.sh up
```

Checking logs (service-name is optional) :
```
bash make.sh logs [service-name]
```
Stopping services:
```
bash make.sh down
```

To see other commands:
```
bash make.sh help
```

# Register a Mock Object

Make a request on any route. The request will be stored by combination of method http and route.

Method: POST <br/>
URL: /api/fake <br/>
Request Body:
```
{
	"fake": "test"
}
```

Now, all requests on POST http://localhost:8000/api/fake will return:
```

{
	"fake": "test"
}
```


# Clear all Mocks

Make a DEL request on:

```
http://localhost:8000/clear
```
