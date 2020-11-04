async function getById(req, res) {
  try {
    const activityOption = await ActivityOption
      .findOne({ id: req.params.id })

    return res.ok(activityOption)
  } catch (err) {
    return res.serverError(err)
  }
}

module.exports = getById
