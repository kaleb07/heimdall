function paginate(count, params, items) {
  const currentPage = params.skip > 0
    ? (params.skip / params.limit) + 1
    : 1
  const totalPages = Number.isNaN(Math.ceil(count / params.limit))
    ? 1
    : Math.ceil(count / params.limit)
  return {
    count,
    totalPages,
    currentPage,
    params: {
      skip: parseInt(params.skip, 10),
      limit: parseInt(params.limit, 10),
      sort: params.sort,
    },
    items,
  }
}

module.exports = paginate
