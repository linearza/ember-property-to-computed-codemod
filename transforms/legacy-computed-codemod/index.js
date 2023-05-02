const { getParser } = require('codemod-cli').jscodeshift;

module.exports = function transformer(file, api) {
  const j = getParser(api);
  const root = j(file.source);

  return root
    .find(j.CallExpression, {
      callee: { property: { name: 'property' }, object: { type: 'FunctionExpression' } },
    })
    .replaceWith((p) => {
      const functionExp = p.value.callee.object;
      const functionArgs = p.value.arguments;

      const computedImport = root.find(j.ImportSpecifier, {
        imported: {
          type: 'Identifier',
          name: 'computed',
        },
      });

      if (!computedImport.length) {
        const body = root.get().value.program.body;
        const computedImport = j.importDeclaration(
          [j.importSpecifier(j.identifier('computed'))],
          j.literal('@ember/object')
        );

        body.unshift(computedImport);
      }

      return j.callExpression(j.identifier('computed'), [...functionArgs, functionExp]);
    })
    .toSource();
};

module.exports.type = 'js';
