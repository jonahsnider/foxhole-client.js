const base = require('@jonahsnider/xo-config');

const config = {...base};

// Required for API extractor compatibility
config.rules['unicorn/prefer-export-from'] = 'off';

module.exports = config;
