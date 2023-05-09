const { getParser } = require('codemod-cli').jscodeshift;
const { updateImports } = require('../../utils/shared');

module.exports = function transformer(file, api) {
  const j = getParser(api);
  const root = j(file.source);

  const existingExpressions = root.find(j.CallExpression, {
    callee: { property: { name: 'set', type: 'Identifier' } },
  });

  existingExpressions.replaceWith((p) => {
    const functionExp = p.value.callee.object;
    const functionArgs = p.value.arguments;

    return j.callExpression(j.identifier('set'), [functionExp, ...functionArgs]);
  });

  if (existingExpressions.length) {
    updateImports(j, root, 'set', '@ember/object');
  }

  return root.toSource();
};

module.exports.type = 'js';
