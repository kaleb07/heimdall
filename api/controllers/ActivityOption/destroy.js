async function destroy(req, res) {
  try {
    const activityOption = await ActivityOption
      .destroy({ id: req.params.id })
    return res.ok(activityOption)
  } catch (err) {
    return res.serverError(err)
  }
}

module.exports = destroy
