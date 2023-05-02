const { getParser } = require('codemod-cli').jscodeshift;

module.exports = function transformer(file, api) {
  const j = getParser(api);
  const root = j(file.source);

  return root
    .find(j.CallExpression, {
      callee: { property: { name: 'observes' }, object: { type: 'FunctionExpression' } },
    })
    .replaceWith((p) => {
      const functionExp = p.value.callee.object;
      const functionArgs = p.value.arguments;

      const observerImport = root.find(j.ImportSpecifier, {
        imported: {
          type: 'Identifier',
          name: 'observer',
        },
      });

      if (!observerImport.length) {
        const body = root.get().value.program.body;
        const observerImport = j.importDeclaration(
          [j.importSpecifier(j.identifier('observer'))],
          j.literal('@ember/object')
        );

        body.unshift(observerImport);
      }

      return j.callExpression(j.identifier('observer'), [...functionArgs, functionExp]);
    })
    .toSource();
};

module.exports.type = 'js';
