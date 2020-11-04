async function post(req, res) {
  try {
    const params = req.allParams()
    if (!params.leaderName) {
      return res.badRequest({ err: 'Leader name cannot be blank.' })
    }
    if (!params.phoneNumber) {
      return res.badRequest({ err: 'Phone number cannot be blank.' })
    }
    if (!params.groupFarmer) {
      return res.badRequest({ err: 'Group farmer cannot be blank.' })
    }
    if (!params.numberOfMember) {
      return res.badRequest({ err: 'Number of members cannot be blank.' })
    }
    if (!params.landArea) {
      return res.badRequest({ err: 'Land area cannot be blank.' })
    }
    if(!params.unitLandArea){
      return res.badRequest({err: 'Unit land area cannot be blank.'})
    }
    if (!params.longTimeFarming) {
      return res.badRequest({ err: 'Long time farming cannot be blank.' })
    }

    const { body } = req

    const prospecting = await Prospecting
      .create(body)
      .intercept(err => err.stack)
      .fetch()

    return res.ok(prospecting)
  } catch (err) {
    return res.serverError(err)
  }
}

module.exports = post
