'use strict';

var utils = require('../utils/writer.js');
var FilesystemResource = require('../service/FilesystemResourceService');

module.exports.apiVersionFilesystemPOST = function apiVersionFilesystemPOST (req, res, next) {
  var headers = req.swagger.params['headers'].value;
  var version = req.swagger.params['version'].value;
  var body = req.swagger.params['body'].value;
  FilesystemResource.apiVersionFilesystemPOST(headers,version,body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
