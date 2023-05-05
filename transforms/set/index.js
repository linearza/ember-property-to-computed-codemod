const { getParser } = require('codemod-cli').jscodeshift;

module.exports = function transformer(file, api) {
  const j = getParser(api);
  const root = j(file.source);

  return root
    .find(j.CallExpression, {
      callee: { property: { name: 'set', type: 'Identifier' } },
    })
    .replaceWith((p) => {
      const functionExp = p.value.callee.object;
      const functionArgs = p.value.arguments;

      const setImport = root.find(j.ImportSpecifier, {
        imported: {
          type: 'Identifier',
          name: 'set',
        },
      });

      if (!setImport.length) {
        const body = root.get().value.program.body;
        const setImport = j.importDeclaration(
          [j.importSpecifier(j.identifier('set'))],
          j.literal('@ember/object')
        );

        body.unshift(setImport);
      }

      return j.callExpression(j.identifier('set'), [functionExp, ...functionArgs]);
    })
    .toSource();
};

module.exports.type = 'js';
