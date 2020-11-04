function get(req, res) {
  const resp = {
    message: `Hi i am ${sails.config.other.app.name}, how may i help you?!`,
    status: 'ok',
  }

  return res.ok(resp)
}

module.exports = get
