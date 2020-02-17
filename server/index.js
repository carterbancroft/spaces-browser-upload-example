'use strict'

const express = require('express')
const aws-sdk = require('aws-sdk')

const app = express()
const port = 4000


app.get('/presignedUrl', (req, res) => {
})

app.listen(port, () => console.log(`Listening for requests on port ${port}...`))
