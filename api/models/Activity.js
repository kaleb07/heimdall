module.exports = {
  attributes: {
    date: {
      type: 'string',
      columnName: 'date',
    },
    activityOptionId: {
      model: 'activityOption'
    },
    activityDesc: {
      type: 'string',
      columnName: 'activity_desc',
      required: true,
    },
    project: {
      type: 'json',
      columnType: 'array',
      required: false,
    },
    harvestQuantity: {
      type: 'string',
      columnName: 'harvest_quantity',
      required: false,
    },
    location: {
      type: 'string',
      columnName: 'location',
      required: true,
    },
    activityResult: {
      type: 'string',
      columnName: 'activity_result',
      required: true,
    },
    images: {
      type: 'json',
      columnType: 'array',
      required: true,
    },
    farmer: {
      collection: 'Prospecting',
      via: 'activityId',
    },
    user: {
      type: 'json',
      columnType: 'array',
      required: true,
    }
  },
}
