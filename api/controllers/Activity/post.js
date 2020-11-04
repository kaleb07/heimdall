async function post(req, res) {
  try {
    const params = req.allParams()
    if (!params.activityDesc) {
      return res.badRequest({ err: 'Description of activity cannot be blank.' })
    }
    if (!params.location) {
      return res.badRequest({ err: 'Location cannot be blank.' })
    }
    if (!params.activityResult) {
      return res.badRequest({ err: 'Activity result cannot be blank.' })
    }
    if (!params.images) {
      return res.badRequest({ err: 'Image cannot be blank.' })
    }

    const { body } = req

    const activity = await Activity
      .create(body)
      .intercept(err => err.stack)
      .fetch()

    return res.ok(activity)
  } catch (err) {
    return res.serverError(err)
  }
}
module.exports = post
