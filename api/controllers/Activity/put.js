async function put(req, res) {
  const { id } = req.params

  const activity = await Activity
    .findOne({ id })
    .populate('farmer')

  const updatedActivity = await Activity
    .update({ id })
    .set(req.body)
    .intercept(err => err.stack)
    .fetch()

  if (updatedActivity.length === 0) {
    return res.notFound('Could not update activity.')
  }

  return res.ok(updatedActivity)
}

module.exports = put
