'use strict'

const cors = require('cors')
const aws = require('aws-sdk')
const express = require('express')
const bodyParser = require('body-parser')

const config = require('./config')

const app = express()
const port = 4000


// Create a new S3 instance for interacting with our DO space. We use S3 because
// the API is the same between DO Spaces and AWS S3.
const spaces = new aws.S3({
  endpoint: new aws.Endpoint(config.spaces.url),
  accessKeyId: config.spaces.accessKeyId,
  secretAccessKey: config.spaces.secretAccessKey
})

app.use(cors())
app.use(bodyParser.json())

app.post('/presigned_url', (req, res) => {
  const body = req.body

  const params = {
    Bucket: config.spaces.spaceName,
    Key: body.fileName,
    Expires: 60 * 3, // Expires in 3 minutes
    ContentType: body.fileType,
    ACL: 'public-read', // Remove this to make the file private
  }

  const signedUrl = spaces.getSignedUrl('putObject', params)

  res.json({signedUrl})
})

app.listen(port, () => console.log(`Listening for requests on port ${port}...`))
