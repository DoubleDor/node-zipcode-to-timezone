/**
 * @file index.js
 *
 * @description Uses zipcodes.json to lookup the timezone for the given zipcode
 *
 * Copyright (C) 2016 Dor Technologies
 *
 * This software may be modified and distributed under the terms
 * of the MIT license.  See the LICENSE file for details.
 */

var zipcode_database = require( './zipcodes.json' );

// This maps the index returned from the zipcode lookup to the time zone. Note: Universal Time Coordinated or UTC is not static
// and changes depending on daylights savings.
var TIMEZONE_MAP = Object.freeze ({
  0: {standard: "EDT", zone:"America/New_York", num: "UTC-05:00"},
  1: {standard: "CDT", zone:"America/Chicago", num: "UTC-06:00"},
  2: {standard: "MDT", zone:"America/Denver", num:"UTC-07:00"},
  3: {standard: "PDT", zone:"America/Los_Angeles", num:"UTC-08:00"},
  4: {standard: "EDT", zone:"America/Kentucky/Louisville", num:"UTC-05:00"},
  5: {standard: "EDT", zone:"America/Indiana/Indianapolis", num:"UTC-05:00"},
  6: {standard: "EDT", zone:"America/Detroit", num:"UTC-05:00"},
  7: {standard: "MDT", zone:"America/Boise", num:"UTC-07:00"},
  8: {standard: "MDT", zone:"America/Phoenix", num:"UTC-07:00"},
  9: {standard: "AKDT", zone:"America/Anchorage", num:"UTC-09:00"},
  10: {standard: "HST", zone:"Pacific/Honolulu", num:"UTC-10:00"},
  11: {standard: "CDT", zone:"America/Indiana/Knox", num:"UTC-05:00"},
  12: {standard: "EDT", zone:"America/Indiana/Winamac", num:"UTC-04:00"},
  13: {standard: "EDT", zone:"America/Indiana/Vevay", num:"UTC-04:00"},
  14: {standard: "EDT", zone:"America/Indiana/Marengo", num:"UTC-04:00"},
  15: {standard: "EDT", zone:"America/Indiana/Vincennes", num:"UTC-04:00"},
  16: {standard: "CDT", zone:"America/Indiana/Tell_City", num:"UTC-05:00"},
  17: {standard: "EDT", zone:"America/Indiana/Petersburg", num:"UTC-04:00"},
  18: {standard: "CDT", zone:"America/Menominee", num:"UTC-05:00"},
  19: {standard: "MDT", zone:"America/Shiprock", num:"UTC-07:00"},
  20: {standard: "AKDT", zone:"America/Nome", num:"UTC-08:00"},
  21: {standard: "AKDT", zone:"America/Juneau", num:"UTC-08:0"},
  22: {standard: "EDT", zone:"America/Kentucky/Monticello", num:"UTC-04:00"},
  23: {standard: "CDT", zone:"America/North_Dakota/Center", num:"UTC-05:00"},
  24: {standard: "AKDT", zone:"America/Yakutat", num:"UTC-08:00"}
});
/**
 * Looks up zipcode in zipcodes.json
 * @param  {String} zipcode The zipcode to lookup, as a String
 * @return {String|null}  Return long name timezone name (e.g. America/Los_Angeles)
 *                        for the zipcode, null if not found
 */
exports.lookup = function( zipcode ) {
    if ( zipcode_database.hasOwnProperty( zipcode ) ) {
        var timezone_index = zipcode_database[ zipcode ];
        if ( TIMEZONE_MAP.hasOwnProperty( timezone_index )) {
            return TIMEZONE_MAP[ timezone_index ];
        }
    }
    return null;
};
