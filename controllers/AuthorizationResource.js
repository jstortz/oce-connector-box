'use strict';

var utils = require('../utils/writer.js');
var AuthorizationResource = require('../service/AuthorizationResourceService');

module.exports.apiVersionAuthorizationAuthorizationURLsPOST = function apiVersionAuthorizationAuthorizationURLsPOST (req, res, next) {
  var clientId = req.swagger.params['X-CEC-clientId'].value;
  var clientSecret = req.swagger.params['X-CEC-clientSecret'].value;
  var body = req.swagger.params['body'].value;
  console.log('API Started'+ JSON.stringify(body));
  AuthorizationResource.apiVersionAuthorizationAuthorizationURLsPOST(clientId,clientSecret,body)
    .then(function (response) {
      console.log(response);
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiVersionAuthorizationBasicAuthorizationsPOST = function apiVersionAuthorizationBasicAuthorizationsPOST (req, res, next) {
  var headers = req.swagger.params['headers'].value;
  var version = req.swagger.params['version'].value;
  AuthorizationResource.apiVersionAuthorizationBasicAuthorizationsPOST(headers,version)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiVersionAuthorizationCompletedAuthorizationsPOST = function apiVersionAuthorizationCompletedAuthorizationsPOST (req, res, next) {
  var code = req.swagger.params['X-CEC-code'].value;
  var clientId = req.swagger.params['X-CEC-clientId'].value;
  var clientSecret = req.swagger.params['X-CEC-clientSecret'].value;
  var body = req.swagger.params['body'].value;

  AuthorizationResource.apiVersionAuthorizationCompletedAuthorizationsPOST(clientId,clientSecret,code,body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
