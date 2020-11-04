module.exports.models = {
  migrate: 'safe',
  schema: true,
  attributes: {
    createdAt: {
      type: 'ref',
      columnType: 'datetime',
      autoCreatedAt: true,
      columnName: 'created_at',
    },
    updatedAt: {
      type: 'ref',
      columnType: 'datetime',
      autoUpdatedAt: true,
      columnName: 'updated_at',
    },
    deletedAt: {
      type: 'ref',
      columnType: 'datetime',
      columnName: 'deleted_at',
    },
    id: { type: 'string', columnName: '_id' },
  },
  cascadeOnDestroy: true,
};
