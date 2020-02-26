# How to upload a file to a Digital Ocean Space directly from the Browser
Most examples I see to do something like this are for S3. Although the APIs are
the same it can still be a confusing difference. This is a basic example that
includes both a client and a server.

The server uses Node.js and Express and the client is built with React
(specifically using create-react-app).

## Prject Setup
Install dependencies in both `server/` and `client/` using npm:
```
$ npm install
```

In the server repo you'll need to update `config.js` to include your own
Digital Ocean Spaces details. You can generate tokens at [https://cloud.digitalocean.com/account/api/tokens](https://cloud.digitalocean.com/account/api/tokens)

## Digital Ocean Setup
You'll need a DO account and a Space (which costs $5 a month).

You'll also need to have CORS configured for your space. You can find this under
the settings for your space. A quick and dirty setup would be:

```
Origin: *
Allowed Methods: PUT
Allowed Headers: *
```

This will allow any PUT requests from anywhere so long as the request includes a
valid access token.

## Running The Server
From the server directory run:
```
$ npm start
```

The server runs by default on port [http://localhost:4000](http://localhost:4000)

## Running The Client
Same thing. From the client directory run:
```
$ npm start
```

The client runs by default at [http://localhost:3000](http://localhost:3000)
