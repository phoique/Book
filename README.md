# Installation
## 1- GraphQL Server (Node.js + Apollo + GraphQL)

Clone this repo and go to server folder.
```
$ cd server

$ npm install OR yarn install
```

### Server Enviroment variables

Create a file named ".env" in the root directory and fill its contents as follows.
```
PORT = 4000
DB_USERNAME = username
DB_PASSWORD = passwor
DB_URL = @xxxx.mlab.com:xxxxx
DB_NAME = datebase_name
```

### Run the GraphQL Server
```
$ npm start OR yarn start
```

and go to  [localhost:PORT/graphql](http://localhost:4000/graphql)

## 2- React Client

Clone this repo and go to client folder.
```
$ cd client
$ npm install OR yarn start

```

### Enviroment variables


Create a file named ".env" in the root directory and fill its contents as follows.
```
REACT_APP_API_URI = http://localhost:4000/graphql
```
### Run the React Client
```
$ npm start OR yarn start
```

and go to  [localhost:3000](http://localhost:3000/)