/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {

  'get /': { action: 'home/get' },
  'get /healthz': { action: 'health/get' },
  'get /healthz/routes': { action: 'health/get-routes' },

  'POST /activity/option': { action: 'ActivityOption/post' },
  'GET /activity/option': { action: 'ActivityOption/get' },
  'GET /activity/option/:id': { action: 'ActivityOption/get-by-id' },
  'PUT /activity/option/:id': { action: 'ActivityOption/update' },
  'DELETE /activity/option/:id': { action: 'ActivityOption/destroy' },

  'POST /activity': { action: 'Activity/post' },
  'GET /activity': { action: 'Activity/get' },
  'GET /activity/:id': { action: 'Activity/get-by-id' },
  'PUT /activity/:id': { action: 'Activity/update' },
  'DELETE /activity/:id': { action: 'Activity/destroy' },

  'GET /project/all': { action: 'Project/get-all' },

  'POST /prospecting': { action: 'Prospecting/post' },
  'GET /prospecting': { action: 'Prospecting/get' },
  'GET /prospecting/:id': { action: 'Prospecting/get-by-id' },
  'PUT /prospecting/:id': { action: 'Prospecting/update' },
  'DELETE /prospecting/:id': { action: 'Prospecting/destroy' },

  'POST /signed-url': { action: 'Activity/signed-url' },
}
