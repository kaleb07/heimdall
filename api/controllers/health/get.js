function get(req, res) {
  const health = {
    ts: new Date(),
    pid: process.pid,
    uptime: process.uptime(),
    memory: process.memoryUsage(),
    status: 'ok',
  }

  return res.ok(health)
}

module.exports = get
