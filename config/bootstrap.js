/**
 * Bootstrap
 * (sails.config.bootstrap)
 *
 * An asynchronous bootstrap function that runs just before your Sails app gets lifted.
 * > Need more flexibility?  You can also do this by creating a hook.
 *
 * For more information on bootstrapping your app, check out:
 * https://sailsjs.com/config/bootstrap
 */

const figlet = require('figlet')

/* eslint-disable func-names */
module.exports.bootstrap = async function (done) {
  figlet
    .text(sails.config.other.app.name, {
      font: 'Standard',
      horizontalLayout: 'full',
      verticalLayout: 'full',
    }, (err, data) => {
      if (err) {
        return
      }
      console.log('\n\n\n')
      /* eslint-disable global-require */
      require('util').log(`\n\n${data}v${process.env.VERSION}`)
      /* eslint-enable global-require */
      console.log(`\n\n\n\n${sails.config.other.app.quotes}`)
    })

  return done()
}
/* eslint-enable func-names */
