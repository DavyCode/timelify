/*!
 * timelify
 * Copyright(c) 2023 Azemoh David Paul
 * MIT Licensed
 */

'use strict'

/**
 * Module dependencies.
 * @private
 */

const moment = require('moment-timezone');

// List of timezones
const timezones = [
  'America/New_York',
  'Asia/Tokyo',
  'Europe/Paris',
  'Australia/Sydney',
  'Africa/Johannesburg'
];

/**
 * Get the current time in any timezone
 * @param
 * @return {array}
 * @public
 */
exports.getCurrentTime = function () {
  var formattedTime = [];
  timezones.forEach(timezone => {
    // The time is formatted using the LLLL format, which displays the full month name, day of the month, year, and time.
    const currentTime = moment().tz(timezone).format('LLLL');
    formattedTime.push({ timezone, currentTime })
  });

  return formattedTime;
}