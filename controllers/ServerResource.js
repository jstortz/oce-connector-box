'use strict';

var utils = require('../utils/writer.js');
var ServerResource = require('../service/ServerResourceService');

module.exports.apiVersionServerGET = function apiVersionServerGET (req, res, next) {
  var version = req.swagger.params['version'].value;
  ServerResource.apiVersionServerGET(version)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
