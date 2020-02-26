import React, {useState} from 'react'

const API_URL = 'http://localhost:4000'

const App = () => {
  const [file, setFile] = useState(null)
  const [uploadSuccessful, setUploadSuccessful] = useState(null)

  const handleInputChange = event => {
    // Add the file to state
    setFile(event.target.files[0])
  }

  const handleSubmit = async event => {
    // Don't do a real form submit
    event.preventDefault()

    const body = {
      fileName: file.name,
      fileType: file.type,
    }

    const response = await fetch(`${API_URL}/presigned_url`, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {'Content-Type': 'application/json'}
    })
    const {signedUrl} = await response.json()

    try {
      await fetch(signedUrl, {
        method: 'PUT',
        body: file,
        headers: {
          'Content-Type': file.type,
          'x-amz-acl': 'public-read',
        }
      })
    }
    catch (err) {
      setUploadSuccessful(false)
      console.log(err)
      alert('There was an error uploading your file')
      throw err
    }

    setUploadSuccessful(true)
  }

  return (
    <>
      <p>Select a dang file to upload to your Space.</p>
      <form onSubmit={handleSubmit}>
        <input type="file" name="file" onChange={handleInputChange} />
        <br />
        <input type="submit" value="Upload" />
        <p>
        {
          uploadSuccessful ? 
            'Your file has been uploaded, go look in your space.' :
            ''
        }
        </p>
      </form>
    </>
  )
}

export default App
