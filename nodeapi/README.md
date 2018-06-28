# nodeapi

## Installation

Install dependencies with:

```shell
npm install
```

### Mongodb

This application uses MongoDB. To start MongoDB you can use:

```shell
./bin/mongod --dbpath ./data/db --directoryperdb
```

## Development

To start the application in development mode use:

```shell
npm run dev
```

## API documentation

### Athentication

To obtain a token make a POST to: /apiv1/usuarios/login with email & password

Use that token inthe rest of request in:
  - header: 'x-access-token'
  - body: token
  - query string: token

### Use
 
http://localhost:3000/apiv1/agentes

To paginate results you can use:
?skip=3&limit=2

To choose only some fields:
&fields=name address -_id

