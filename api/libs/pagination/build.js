function build(query) {
  const params = {
    skip: 0,
    limit: 100,
    sort: [],
  }

  if (query) {
    const newParams = {
      skip: query.skip
        ? query.skip
        : params.skip,
      limit: query.limit
        ? query.limit
        : params.limit,
      sort: query.sort
        ? query.sort
        : params.sort,
    }

    if (!Array.isArray(newParams.sort)) {
      newParams.sort = [newParams.sort]
    }

    if (query.where) {
      newParams.where = query.where
    }

    return newParams
  }
  return params
}

module.exports = build
