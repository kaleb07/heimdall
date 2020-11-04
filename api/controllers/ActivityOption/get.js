async function get(req, res) {
  try {
    const activityOptions = await ActivityOption
      .find()

    return res.ok(activityOptions)
  } catch (err) {
    return res.serverError(err)
  }
}

module.exports = get
