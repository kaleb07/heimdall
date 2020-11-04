module.exports = {
  attributes: {
    name: {
      columnName: 'name',
      type: 'string',
      required: true,
    },
    activities: {
      collection: 'Activity',
      via: 'activityOptionId',
    },
  },
}
