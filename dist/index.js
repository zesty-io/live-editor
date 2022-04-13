
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./ft-tabs.cjs.production.min.js')
} else {
  module.exports = require('./ft-tabs.cjs.development.js')
}
