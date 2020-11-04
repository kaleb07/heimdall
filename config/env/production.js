module.exports = {
  adapter: 'sails-mongo',
  blueprints: {
    shortcuts: false,
  },
  custom: {
    baseUrl: 'https://example.com',
    internalEmailAddress: 'support@example.com',
  },
  http: {
    cache: 365.25 * 24 * 60 * 60 * 1000,
    trustProxy: true,
  },
  log: {
    level: 'debug',
  },
  models: {
    migrate: 'safe',
    cascadeOnDestroy: false,
  },
  port: process.env.PORT,
  // ssl: undefined,
  security: {
    cors: {
      // allowOrigins: [
      //   'https://example.com',
      // ]
    },
  },
};
