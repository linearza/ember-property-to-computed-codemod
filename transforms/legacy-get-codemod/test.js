'use strict';

const { runTransformTest } = require('codemod-cli');

runTransformTest({
  name: 'legacy-get-codemod',
  path: require.resolve('./index.js'),
  fixtureDir: `${__dirname}/__testfixtures__/`,
});
