'use strict'
const moment = require('moment')

/**
 * Behaves just like the normal Date class, except that it gets stringified to YYYY-MM-DD 
 */
class DateOnly extends Date {
  /**
   * Returns an ISO date string in the format YYYY-MM-DD
   * @returns {string}
   */
  toISOString() {
    return moment(this).utc().format('YYYY-MM-DD')
  }
}

module.exports = exports['default'] = DateOnly
