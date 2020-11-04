const { auth, project } = require('../../libs/tanifund')

async function getAll(req, res) {
  try {
    const token = await auth()

    const response = await project(token)

    return res.ok(response)
  } catch (err) {
    return res.serverError(err)
  }
}

module.exports = getAll
