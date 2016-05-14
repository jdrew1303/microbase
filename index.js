'use strict';

var path = require('path');

module.exports = function (options) {
  options = options || {};
  /*
    options = options || {
      config: Configuration service,
      logger: Logger service,
      db:     Database service,
      module: Initial operations from a module
    };
  */
  const base = {};

  // Configuration object
  var rootPath = path.dirname(require.main.filename);
  base.config = options.config || require('./modules/config')([
       rootPath + '/config/' + (process.env.NODE_ENV || 'development') + '.json',
       rootPath + '/config/defaults.json'
     ]);

  // Logger service
  base.logger = options.logger || require('./modules/logger')(base);

  // Database service
  base.db = options.db || require('./modules/db')(base);

  // Services service
  base.services = options.services || require('./modules/services')(base);

  // Initial operations
  if (options.module) {
    const module = options.module(base);
    base.services.addModule(module);
  }

  return base;
};
