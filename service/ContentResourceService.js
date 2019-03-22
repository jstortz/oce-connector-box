'use strict';


/**
 * Get the content of a filesystem object.The response entity is the content of the file. The response should include the following headers: Content-Length -> set to the entity length or -1 if unknown, Content-Type -> set to the content type or <code>application/octet-stream</code> if a more accurate type is not possible, Content-Disposition -> set to disposition type of attachment and include a filename parameter (for example,Content-Disposition: attachment; filename=''meeting agenda.doc''). Note that file names with spaces must be quoted. See RFC 6266 for details about the format and encoding of the header.
 *
 * version String Version value of the API for example the current release version is v1
 * headers String Connector Framework will pass all the custom properties and proxy values via Http headers.
 * uri String URI of the filesystem object default value if empty is root (optional)
 * no response value expected for this operation
 **/
exports.apiVersionContentGET = function(version,headers,uri) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Get the content of a thumbnail of the file.The response entity is the content of the thumbnail. The response should include the following headers: Content-Length -> set to the entity length or -1 if unknown, Content-Type -> set to the content type or <code>application/octet-stream</code> if a more accurate type is not possible, Content-Disposition -> set to disposition type of attachment and include a filename parameter (for example,Content-Disposition: attachment; filename=''meeting agenda.doc''). Note that file names with spaces must be quoted. See RFC 6266 for details about the format and encoding of the header.
 *
 * uri String URI of the filesystem object. The object's unique identifier from a string representation.
 * version String Version value of the API for example the current release version is v1
 * headers String Connector Framework will pass all the custom properties and proxy values via Http headers.
 * no response value expected for this operation
 **/
exports.apiVersionContentGetthumbnailGET = function(uri,version,headers) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

