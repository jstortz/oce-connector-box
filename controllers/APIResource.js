'use strict';

var utils = require('../utils/writer.js');
var APIResource = require('../service/APIResourceService');

module.exports.apiGET = function apiGET (req, res, next) {
  APIResource.apiGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
