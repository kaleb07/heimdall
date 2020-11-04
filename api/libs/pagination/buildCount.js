function buildCount(query) {
  const params = {}
  if (query && query.where) {
    params.where = query.where
  }
  return params
}

module.exports = buildCount
