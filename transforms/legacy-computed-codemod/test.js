'use strict';

const { runTransformTest } = require('codemod-cli');

runTransformTest({
  name: 'legacy-computed-codemod',
  path: require.resolve('./index.js'),
  fixtureDir: `${__dirname}/__testfixtures__/`,
});
