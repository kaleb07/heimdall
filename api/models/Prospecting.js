module.exports = {
  attributes: {
    leaderName: {
      type: 'string',
      columnName: 'leader_name',
      required: true,
    },
    phoneNumber: {
      type: 'string',
      columnName: 'phone_number',
      required: true,
    },
    groupFarmer: {
      type: 'string',
      columnName: 'group_farmer',
      required: true,
    },
    numberOfMember: {
      type: 'number',
      columnType: 'integer',
      columnName: 'number_of_members',
      required: true,
    },
    landArea: {
      type: 'number',
      columnType: 'integer',
      columnName: 'land_area',
      required: true,
    },
    unitLandArea: {
      type: 'string',
      columnName: 'unit_land_area',
      required: true,
    },
    longTimeFarming: {
      type: 'string',
      columnName: 'long_time_farming',
      required: true,
    },
    product: {
      type: 'json',
      columnType: 'array',
      required: true,
    },
    activityId: {
      model: 'Activity',
    },
  },
}
