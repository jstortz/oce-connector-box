'use strict';


/**
 * Create an authorization URL and related information. This API will need to be implemented if remote store suppots oauth style of authorization
 *
 * headers String Connector Framework will pass all the custom properties and proxy values via Http headers.
 * version String Version value of the API for example the current release version is v1
 * body CreateAuthorizationRequestInfo The request body defines the details of the request.
 * returns CreateAuthorizationResponseInfo
 **/
exports.apiVersionAuthorizationAuthorizationURLsPOST = function (clientId, clientSecret, body) {
  return new Promise(function (resolve, reject) {
    var response = {};
    response = {
      "authorizationURL": "https://account.box.com/api/oauth2/authorize?response_type=code&client_id=" + clientId + "&redirect_uri=" + body.redirectURL + "&state=box-connector",
      "fieldValueMap": {}
    };
    resolve(response);
  });
}


/**
 * To verify the credential for basic authorization. This API will need to be implemented if remote store suppots Basic authentication
 *
 * headers String Connector Framework will pass all the custom properties and proxy values via Http headers.
 * version String Version value of the API for example the current release version is v1
 * no response value expected for this operation
 **/
exports.apiVersionAuthorizationBasicAuthorizationsPOST = function (headers, version) {
  return new Promise(function (resolve, reject) {
    resolve();
  });
}


/**
 * To complete the oauth based authorization. This API will need to be implemented if remote store suppots oauth style of authorization
 *
 * headers String Connector Framework will pass all the custom properties and proxy values via Http headers.
 * version String Version value of the API for example the current release version is v1
 * body CompleteAuthorizationRequestInfo The request body defines the details of the request.
 * returns CompleteAuthorizationResponseInfo
 **/
exports.apiVersionAuthorizationCompletedAuthorizationsPOST = function (clientId, clientSecret, code, body) {
  return new Promise(function (resolve, reject) {
    console.log("Code==" + code);
    var response = {};
    const https = require('https');
    var querystring = require('querystring');

    // form data
    var postData = querystring.stringify({
      grant_type: "authorization_code",
      code: code,
      client_id: clientId,
      client_secret: clientSecret
    });

    var options = {
      hostname: 'api.box.com',
      port: 443,
      path: '/oauth2/token',
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Content-Length': postData.length
      }
    };

    //Sending request
    var req = https.request(options, (res) => {
      res.on('data', (d) => {
        var dataStr = d.toString('utf8');
        var data = JSON.parse(dataStr);

        response = {
          "authorized": true,
          "fieldValueMap": {
            "accessToken": data.access_token,
            "refreshToken": data.refresh_token
          },
          "authorizedUserPictureURL": code,
          "authorizedUserDisplayName": null,
          "authorizedUserEmailAddress": null,
        };
        resolve(response);
      });
    });
    req.on('error', (e) => {
      console.error(e);
    });
    req.write(postData);
    req.end();
  });
}