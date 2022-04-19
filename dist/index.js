
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./explorer-ters.cjs.production.min.js')
} else {
  module.exports = require('./explorer-ters.cjs.development.js')
}
