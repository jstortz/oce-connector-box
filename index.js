'use strict';

var fs = require('fs'),
  path = require('path'),
  http = require('http');//,
 // https = require('https');

var app = require('connect')();
var swaggerTools = require('swagger-tools');
var jsyaml = require('js-yaml');
var serverPort = 8080;

// swaggerRouter configuration
var options = {
  swaggerUi: path.join(__dirname, '/swagger.json'),
  controllers: path.join(__dirname, './controllers'),
  useStubs: process.env.NODE_ENV === 'development' // Conditionally turn on stubs (mock mode)
};

// The Swagger document (require it, build it programmatically, fetch it from a URL, ...)
var spec = fs.readFileSync(path.join(__dirname, 'api/swagger.yaml'), 'utf8');
var swaggerDoc = jsyaml.safeLoad(spec);

// Initialize the Swagger middleware
swaggerTools.initializeMiddleware(swaggerDoc, function (middleware) {

  // Interpret Swagger resources and attach metadata to request - must be first in swagger-tools middleware chain
  app.use(middleware.swaggerMetadata());

  // Validate Swagger requests
  app.use(middleware.swaggerValidator());

  // Route validated requests to appropriate controller
  app.use(middleware.swaggerRouter(options));

  // Serve the Swagger documents and Swagger UI
  app.use(middleware.swaggerUi());

  // Picker UI
  app.use('/picker', function (req, res) {
    fs.readFile('./html/picker.html', function (err, html) {
      if (err) {
        throw err;
      }
      res.writeHeader(200, {
        "Content-Type": "text/html"
      });
      res.write(html);
      res.end();
    });
  });

    // OCE JS
    app.use('/oracle-oce-custompicker.js', function (req, res) {
      fs.readFile('./html/oracle-oce-custompicker.js', function (err, html) {
        if (err) {
          throw err;
        }
        res.writeHeader(200, {
          "Content-Type": "text/html"
        });
        res.write(html);
        res.end();
      });
    });
  // Start the server
  http.createServer(app).listen(serverPort, function () {
    console.log('Your server is listening on port %d (http://localhost:%d)', serverPort, serverPort);
    console.log('Swagger-ui is available on http://localhost:%d/docs', serverPort);
  });
// var privateKey  = fs.readFileSync('./domain.key', 'utf8');
// var certificate = fs.readFileSync('./domain.crt', 'utf8');

// var options = {key: privateKey, cert: certificate};
//   https.createServer(options, app).listen(443);
});