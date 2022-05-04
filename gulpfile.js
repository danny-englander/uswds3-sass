
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
uswds.paths.dist.css = './src/assets/css';
uswds.paths.dist.theme = './src/sass';
uswds.paths.dist.img = './src/assets/uswds/img';
uswds.paths.dist.fonts = './src/assets/uswds/fonts';

/**
 * Exports
 * Add as many as you need
 */

// Init project
exports.init = uswds.init;
// Compile function.
exports.compile = uswds.compile;
exports.watch = uswds.watch;
exports.update = uswds.updateUswds;
exports.default = uswds.watch;
exports.copyAssets = uswds.copyAssets;
