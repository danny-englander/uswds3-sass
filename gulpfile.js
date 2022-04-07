
const uswds = require("@uswds/compile");

/**
 * USWDS version
 */
// Use version 3.
uswds.settings.version = 3;

/**
 * Path settings
 * Set as many as you need
 */

uswds.paths.dist.css = './assets/css';
uswds.paths.dist.theme = './sass';

/**
 * Exports
 * Add as many as you need
 */

// Init project
exports.init = uswds.init;
// Compile function.
exports.compile = uswds.compile;
