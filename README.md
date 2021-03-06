# Upload files to a Digital Ocean Space directly from the browser
Most examples I see to do something like this are for S3. Although the APIs are
the same it can still be a confusing difference. This is a basic example that
includes both a client and a server.

The server uses Node.js and Express and the client is built with React
(specifically using create-react-app).

I've also written a [companion article](https://carterbancroft.com/uploading-directly-to-digital-ocean-spaces-from-your-dang-browser/)
for this repo.

## Project Setup
Install dependencies in both `server/` and `client/` using npm:
```
$ npm install
```

In the server repo you'll need to update [`config.js`](https://github.com/carterbancroft/spaces-browser-upload-example/blob/master/server/config.js)
to include your own Digital Ocean Spaces details. You can generate tokens at [https://cloud.digitalocean.com/account/api/tokens](https://cloud.digitalocean.com/account/api/tokens)

## Digital Ocean Setup
You'll need a DO account and a Space (which costs $5 a month).

You'll also need to have CORS configured for your space. You can find this under
the settings for your space. A quick and dirty setup would be:

```
Origin: *
Allowed Methods: PUT
Allowed Headers: *
```

This will allow PUT requests from anywhere with any headers so long as the
request includes a valid access token.

## Running The Server
From the server directory run:
```
$ npm start
```

The server runs by default on port [http://localhost:4000](http://localhost:4000)

## Running The Client
From the client directory run:
```
$ npm start
```

The client runs by default at [http://localhost:3000](http://localhost:3000)
