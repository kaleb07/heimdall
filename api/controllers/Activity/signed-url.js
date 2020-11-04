const { Storage } = require('@google-cloud/storage')

async function signedUrl(req, res) {
  const { body } = req
  const storage = new Storage()
  const myBucket = storage.bucket('s-tanifund-storage')

  const file = myBucket.file(body.url)
  const config = {
    action: 'write',
    expires: Date.now() + 600000,
    contentType: body.contentType,
  }

  const data = await file.getSignedUrl(config)

  return res.ok(data)
}

module.exports = signedUrl
