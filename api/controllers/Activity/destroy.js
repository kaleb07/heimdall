async function destroy(req, res) {
  try {
    const activity = await Activity
      .destroy({ id: req.params.id })

    return res.ok(activity)
  } catch (err) {
    return res.serverError(err)
  }
}

module.exports = destroy
