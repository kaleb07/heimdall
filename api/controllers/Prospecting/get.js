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

  const prospects = await Prospecting
    .find({ ...searchParams })
    .intercept(err => err.stack)

  const countProspects = await Prospecting.count(countParams)
  const paginated = paginate(countProspects, searchParams, prospects)

  return res.ok(paginated)
}

module.exports = get
