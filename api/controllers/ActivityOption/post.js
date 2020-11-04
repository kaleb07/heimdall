async function post(req, res) {
  try {
    const params = req.allParams()
    if (!params.name) {
      return res.badRequest({ err: 'Name cannot be blank.' })
    }

    const { body } = req

    const currentActivityOption = await ActivityOption
      .findOne({ name: body.name })
      .intercept(err => err.stack)

    if (currentActivityOption) {
      return res.badRequest('Name is already exists.')
    }

    const activityOption = await ActivityOption
      .create(body)
      .intercept(err => err.stack)
      .fetch()

    return res.ok(activityOption)
  } catch (err) {
    return res.serverError(err)
  }
}

module.exports = post
