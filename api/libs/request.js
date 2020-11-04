const fetch = require('node-fetch')

async function request(params) {
  const {
    headers, method, payloads, path, qs, serviceHost,
  } = params

  let servicePath = `${serviceHost}${path}`
  if (qs) {
    servicePath = `${servicePath}?string=${JSON.stringify(qs)}`
  }
  const options = { method, headers }

  if (method === 'POST' || method === 'PUT' || method === 'PATCH') {
    options.body = JSON.stringify(payloads)
  }

  const response = await fetch(servicePath, options)
  const jsonResponse = await response.json()

  return jsonResponse
}

module.exports = request
