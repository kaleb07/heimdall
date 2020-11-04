async function getById(req, res) {
  try {
    const activity = await Activity
      .findOne({ id: req.params.id })
      .populate('farmer')

    return res.ok(activity)
  } catch (err) {
    return res.serverError(err)
  }
}

module.exports = getById
