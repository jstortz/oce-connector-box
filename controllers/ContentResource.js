'use strict';

var utils = require('../utils/writer.js');
var ContentResource = require('../service/ContentResourceService');
var https = require('follow-redirects').https;

module.exports.apiVersionContentGET = function apiVersionContentGET(req, res, next) {
  var version = req.swagger.params['version'].value;
  var uri = req.swagger.params['uri'].value;
  var access_token = req.swagger.params['X-CEC-accessToken'].value;

  var fileId = "";
  if (uri.includes(":")) {
    fileId = uri.split(":")[1];
  }
  console.log("FileID:"+fileId);
  var options = {
    hostname: 'api.box.com',
    port: 443,
    maxRedirects: 3,
    followAllRedirects: true,
    path: '/2.0/files/' + fileId + '/content',
    method: 'GET',
    headers: {
      'Authorization': 'Bearer ' + access_token
    }
    };

  var fileRes = https.get(options, function(response){
    response.on('data',function (chunk){

      res.write(chunk,'binary');
    });
    response.on('end',function (){
      res.end();
    });
    var header = JSON.stringify(response.headers);
    //Workaround to change the reponse attribute case
    header = JSON.parse(header.replace("content-disposition","Content-Disposition"));
    res.writeHead(response.statusCode,header);
  });
};

module.exports.apiVersionContentGetthumbnailGET = function apiVersionContentGetthumbnailGET(req, res, next) {
  var uri = req.swagger.params['uri'].value;
  var version = req.swagger.params['version'].value;
  var headers = req.swagger.params['headers'].value;
  ContentResource.apiVersionContentGetthumbnailGET(uri, version, headers)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};