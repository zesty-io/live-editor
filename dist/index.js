
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./explorer-dev.cjs.production.min.js')
} else {
  module.exports = require('./explorer-dev.cjs.development.js')
}
