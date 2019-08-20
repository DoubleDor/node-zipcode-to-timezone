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

var TIMEZONE_MAP = Object.freeze ({
  0: "America/New_York",
  1: "America/Chicago",
  2: "America/Denver",
  3: "America/Los_Angeles",
  4: "America/Kentucky/Louisville",
  5: "America/Indiana/Indianapolis",
  6: "America/Detroit",
  7: "America/Boise",
  8: "America/Phoenix",
  9: "America/Anchorage",
  10: "Pacific/Honolulu",
  11: "America/Indiana/Knox",
  12: "America/Indiana/Winamac",
  13: "America/Indiana/Vevay",
  14: "America/Indiana/Marengo",
  15: "America/Indiana/Vincennes",
  16: "America/Indiana/Tell_City",
  17: "America/Indiana/Petersburg",
  18: "America/Menominee",
  19: "America/Shiprock",
  20: "America/Nome",
  21: "America/Juneau",
  22: "America/Kentucky/Monticello",
  23: "America/North_Dakota/Center",
  24: "America/Yakutat",
	25: "Pacific/Guam"
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
