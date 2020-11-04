async function put(req, res) {
  const { id } = req.params

  const prospecting = await Prospecting
    .findOne({ id })

  if (!prospecting) {
    return res.badRequest('No prospecting result to update.')
  }

  const updatedProspecting = await Prospecting
    .update({ id })
    .set(req.body)
    .intercept(err => err.stack)
    .fetch()

  if (updatedProspecting.length === 0) {
    return res.notFound('Could not update prospecting result.')
  }

  return res.ok(updatedProspecting)
}

module.exports = put
