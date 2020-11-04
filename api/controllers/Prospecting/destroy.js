async function destroy(req, res) {
  try {
    const prospecting = await Prospecting
      .destroy({ id: req.params.id })

    return res.ok(prospecting)
  } catch (err) {
    return res.serverError(err)
  }
}

module.exports = destroy
