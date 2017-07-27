/**
 * @file tests/lookup.js
 *
 * @description tests lookup function using some known zipcodes
 *
 * Copyright (C) 2016 Dor Technologies
 *
 * This software may be modified and distributed under the terms
 * of the MIT license.  See the LICENSE file for details.
 */

var _ = require('underscore'),
    assert = require('chai').assert;

var zipcode_to_timezone = require('../');

var test_zipcodes = {
    '21114': 'America/New_York',
    '94110': 'America/Los_Angeles',
    '06419': 'America/New_York',
    '93460': 'America/Los_Angeles',
    '00000': null
};

describe('zipcode_to_timezone.lookup', function () {
    _
        .each(test_zipcodes, function (tz, zipcode) {
            it(zipcode + '->' + tz, function () {
                var found_tz = zipcode_to_timezone.lookup(zipcode);
                var zone = found_tz ? found_tz.zone : null;
                assert.equal(zone, tz);
            });
        });
});
