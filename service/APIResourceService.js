'use strict';


/**
 * Get an array of all implemented API versions.
 *
 * returns VersionResponseInfo
 **/
exports.apiGET = function() {
  return new Promise(function(resolve, reject) {
    var response = {};
    response = ["v1"];
    resolve(response);
  });
}

