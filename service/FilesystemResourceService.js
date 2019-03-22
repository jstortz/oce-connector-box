'use strict';


/**
 * Return meta data about an object in remote files system
 *
 * headers String Connector Framework will pass all the custom properties and proxy values via Http headers.
 * version String Version value of the API for example the current release version is v1
 * body FileSystemRequestInfo The request body defines the details of the request.
 * returns FileSystemResponseInfo
 **/
exports.apiVersionFilesystemPOST = function(headers,version,body) {
  return new Promise(function(resolve, reject) {
    var response = {};
    response['application/json'] = {
  "totalItemsCount" : 6.02745618307040320615897144307382404804229736328125,
  "hasMoreItems" : true,
  "numItems" : 0.80082819046101150206595775671303272247314453125,
  "fileSystemInfo" : {
    "lastModifiedTimeStamp" : 5.63737665663332876420099637471139430999755859375,
    "isThumbnailUrlPrivate" : true,
    "additionalInformation" : {
      "name" : "name",
      "value" : "value"
    },
    "extension" : "extension",
    "creator" : "creator",
    "parentUri" : "parentUri",
    "browseURL" : "browseURL",
    "lastModifiedBy" : "lastModifiedBy",
    "createdTimeStamp" : 5.962133916683182377482808078639209270477294921875,
    "directoryContents" : [ null, null ],
    "description" : "description",
    "mimeType" : "mimeType",
    "uri" : "uri",
    "version" : "version",
    "size" : 1.46581298050294517310021547018550336360931396484375,
    "name" : "name",
    "isDirectory" : true,
    "thumbnailURL" : "thumbnailURL"
  }
};
    if (Object.keys(response).length > 0) {
      resolve(response[Object.keys(res)[0]]);
    } else {
      resolve();
    }
  });
}

