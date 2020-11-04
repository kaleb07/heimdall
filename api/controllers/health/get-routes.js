function getRoutes(req, res) {
  const data = {}
  data.routes = Object
    .entries(sails.config.routes)
    .map(t => `[${t[0].split(' ')[0].toUpperCase()}] ${t[0].split(' ')[1]}`)

  return res.ok(data)
}

module.exports = getRoutes
