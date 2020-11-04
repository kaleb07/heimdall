const request = require('../request')

async function auth() {
  const resp = request({
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
    payloads: {
      grant_type: 'client_credentials',
      client_id: sails.config.other.tanifund.clientId,
      client_secret: sails.config.other.tanifund.clientSecret,
    },
    path: '/oauth/token',
    serviceHost: sails.config.other.host.tanifund,
  })

  return resp
}

module.exports = auth
