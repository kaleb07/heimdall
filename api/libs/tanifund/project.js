const request = require('../request')

async function project(header) {
  const resp = request({
    headers: {
      Authorization: `${header.token_type} ${header.access_token}`,
      'Content-Type': 'application/json',
    },
    method: 'GET',
    path: '/v1/projects/on-going',
    serviceHost: sails.config.other.host.tanifund,
  })

  return resp
}

module.exports = project
