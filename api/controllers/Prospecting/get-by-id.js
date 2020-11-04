async function getById(req, res) {
  try {
    const prospecting = await Prospecting
      .findOne({ id: req.params.id })

    return res.ok(prospecting)
  } catch (err) {
    return res.serverError(err)
  }
}

module.exports = getById
