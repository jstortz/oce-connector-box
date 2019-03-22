'use strict';


/**
 * Get the server description.
 *
 * version String Version value for example the current release version is v1
 * returns ServerInfo
 **/
exports.apiVersionServerGET = function(version) {
  return new Promise(function(resolve, reject) {
    var response = {};
    response['application/json'] = 
    {
      "name": "Box Connector",
      "nameLocalizations" : [ 
        {
          "locale": "en",
          "localizedString": "Box Connector"
        } 
      ],
      "version": " (, , )",
      "about": "Box Connector.<br>Copyright (c) 2019. All rights reserved.",
      "aboutLocalizations": [
        {
            "locale": "en",
            "localizedString": "Box Connector.<br>Copyright (c) 2019. All rights reserved."
        }
    ],
    "authenticationType": "OAUTH",
    "pickerType": "CUSTOM",
    "enableMultiUserCopyBack": false,
    "maxUploadSize": 1073741824,
    "fields": [
      {
          "ID": "clientId",
          "datatype": "STRING",
          "siteSettable": true,
          "userSettable": false,
          "connectorSettable": false,
          "authorizationURLParameter": false,
          "label": "Client ID",
          "labelLocalizations": [
              {
                  "locale": "en",
                  "localizedString": "Client ID"
              }
          ],
          "description": null,
          "descriptionLocalizations": [],
          "required": true
      },
      {
        "ID": "clientSecret",
        "datatype": "STRING",
        "siteSettable": true,
        "userSettable": false,
        "connectorSettable": false,
        "authorizationURLParameter": false,
        "label": "Client Secret",
        "labelLocalizations": [
            {
                "locale": "en",
                "localizedString": "Client Secret"
            }
        ],
        "description": null,
        "descriptionLocalizations": [],
        "required": true
    },
    {
      "ID": "code",
      "datatype": "STRING",
      "siteSettable": false,
      "userSettable": false,
      "connectorSettable": false,
      "authorizationURLParameter": true,
      "label": "Code",
      "labelLocalizations": [
          {
              "locale": "en",
              "localizedString": "Code"
          }
      ],
      "description": null,
      "descriptionLocalizations": [],
      "required": false
  },
    {
      "ID": "accessToken",
      "datatype": "STRING",
      "siteSettable": false,
      "userSettable": false,
      "connectorSettable": true,
      "authorizationURLParameter": false,
      "label": "Code",
      "labelLocalizations": [
          {
              "locale": "en",
              "localizedString": "Access Token"
          }
      ],
      "description": null,
      "descriptionLocalizations": [],
      "required": false
  },
  {
      "ID": "refreshToken",
      "datatype": "STRING",
      "siteSettable": false,
      "userSettable": false,
      "connectorSettable": true,
      "authorizationURLParameter": false,
      "label": "Code",
      "labelLocalizations": [
          {
              "locale": "en",
              "localizedString": "Refresh Token"
          }
      ],
      "description": null,
      "descriptionLocalizations": [],
      "required": false
  }
  ],
  "supportedConnectorTypes": [
      "COPY"
  ],
  "proprietorName": "",
  "serviceProviderName": "Box",
  "nativeAppInfos": null
};
    if (Object.keys(response).length > 0) {
      resolve(response[Object.keys(response)[0]]);
    } else {
      resolve();
    }
  });
}

