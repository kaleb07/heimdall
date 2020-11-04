async function put(req, res) {
  const { id } = req.params
  const { body } = req
  const activityOption = await ActivityOption
    .findOne({ id })
  if (!activityOption) {
    return res.badRequest('No activity option to update.')
  }

  const currentActivityOption = await ActivityOption
    .findOne({ name: body.name, id: { '!=': id } })

  if (currentActivityOption) {
    return res.badRequest('This activity option is already exists.')
  }

  const updatedActivityOption = await ActivityOption
    .update({ id })
    .set(body)
    .intercept(err => err.stack)
    .fetch()

  if (updatedActivityOption.length === 0) {
    return res.notFound('Could not update activity option.')
  }

  return res.ok(updatedActivityOption)
}

module.exports = put
