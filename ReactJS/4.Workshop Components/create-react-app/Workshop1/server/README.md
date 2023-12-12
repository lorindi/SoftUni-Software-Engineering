# Server

## 🛠 Libraries and tools used

- [Express](https://expressjs.com/)
- [Mongoose](https://mongoosejs.com/)
- [Cors](https://github.com/expressjs/cors)
- [Dotenv](https://github.com/motdotla/dotenv)
- [Nodemon](https://github.com/remy/nodemon)

## Getting Started

Clone this repository and install dependencies

```
> git clone https://github.com/MihailValkov/user-list-demo.git
> cd server
> npm install
```

### Create '.env' file in the main directory and populate the following information:

- `DB_NAME` -- Mongo Database name;
- `DB_CONNECTION` -- Mongo Database connection string;

### Example

```
DB_NAME=user-list
DB_CONNECTION=mongodb://localhost:27017
```

To start the server, you must run the following command in your terminal:

```
> npm run dev
```

## Base URL

The Base URL for the API is: `http://localhost:3005/api`

The documentation below assumes you are pre-pending the Base URL to the endpoints in order to make requests.

# Endpoints: Users

- `/users` -- create new user / get all users;
- `/users/{userId}` -- get / update / delete user by provided id;

## Create a new user

Create a new user by sending a `POST` request to `/users` with properties `firstName`, `lastName`, `email`, `imageUrl`, `phoneNumber` and `address`. The service will respond with an object, containing newly created user.

### Body

```
{
  firstName: string;
  lastName: string;
  email: string;
  imageUrl: string;
  phoneNumber: string;
  address: {
    country: string,
    city: string;
    street: string;
    streetNumber: number;
  }
}
```

### Success Response:

Code: 201 Created

Content:

```
{
  user: {
    _id: string;
    firstName: string;
    lastName: string;
    email: string;
    imageUrl: string;
    phoneNumber: string;
    createdAt: string;
    updatedAt: string;
  }
}
```

## Get all users

Send a `GET` request to `/users`. The service will respond with an object containing properties `users` (an array of user objects) and `count` (number of all records). This endpoint can accept query params like: `page`, `limit`, `sort`, `order`, `search` and `criteria`.

Send a `GET` request to `/users?page=1&limit=5&search=Chris&criteria=firstName&sort=createdAt&order=desc`. The service will respond with an object, containing properties `users` (an array with a maximum of 5 records, sorted in descending order by createdAt - date of creation and filtered by firstName, which includes the searched string `"Chris"`) and `count` (number of all records that match this criterion).

## Get user by userId

Send a `GET` request to `/users/{userId}`. The service will respond with an user object.

### Success Response:

Code: 200 OK

Content:

```
{
  user: {
    _id: string;
    firstName: string;
    lastName: string;
    email: string;
    imageUrl: string;
    phoneNumber: string;
    address: {
    country: string,
    city: string;
    street: string;
    streetNumber: number;
    }
    createdAt: string;
    updatedAt: string;
  }
}
```

## Update user by userId

Update an existing user by sending a `PUT` request to `/users/{userId}` with properties `firstName`, `lastName`, `email`, `imageUrl`, `phoneNumber` and `address`. The service will respond with an object, containing newly updated user.

### Body

```
{
  firstName: string;
  lastName: string;
  email: string;
  imageUrl: string;
  phoneNumber: string;
  address: {
    country: string,
    city: string;
    street: string;
    streetNumber: number;
  }
}
```

### Success Response:

Code: 200 OK

Content:

```
{
  user: {
    _id: string;
    firstName: string;
    lastName: string;
    email: string;
    imageUrl: string;
    phoneNumber: string;
    createdAt: string;
    updatedAt: string;
  }
}
```

## Delete user by userId

Delete an existing user by sending a `DELETE` request to `/users/{userId}`. The service will respond with an object, containing userId of the deleted user.

### Success Response:

Code: 200 OK

Content:

```
{
  userId: string;
}
```

**In case of a validation error, the service will respond with an error status code and an object containing the error message**.

### Error Response:

```
{
  message: string;
}
```

## Further Information
You may create issues, regarding missing, incorrect or incomplete information. Any contribution is welcome!
