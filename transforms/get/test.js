'use strict';

const { runTransformTest } = require('codemod-cli');

runTransformTest({
  name: 'get',
  path: require.resolve('./index.js'),
  fixtureDir: `${__dirname}/__testfixtures__/`,
});
