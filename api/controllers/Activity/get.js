const { build, buildCount, paginate } = require('../../libs/pagination')

async function get(req, res) {
  const { where, ...paging } = (req.query.string)
    ? JSON.parse(req.query.string)
    : { }

  const condition = {
    ...where,
  }

  const queries = {
    where: condition,
    ...paging,
  }

  const searchParams = build(queries)
  const countParams = buildCount(queries)

  const activities = await Activity
    .find({ ...searchParams })
    .populate('farmer')
    .intercept(err => err.stack)

  const countActivities = await Activity.count(countParams)
  const paginated = paginate(countActivities, searchParams, activities)

  return res.ok(paginated)
}

module.exports = get
