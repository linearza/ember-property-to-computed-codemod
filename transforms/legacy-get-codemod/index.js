const { getParser } = require('codemod-cli').jscodeshift;

module.exports = function transformer(file, api) {
  const j = getParser(api);
  const root = j(file.source);

  return root
    .find(j.CallExpression, {
      callee: { property: { name: 'get', type: 'Identifier' } },
    })
    .replaceWith((p) => {
      const functionExp = p.value.callee.object;
      const functionArgs = p.value.arguments;

      const getImport = root.find(j.ImportSpecifier, {
        imported: {
          type: 'Identifier',
          name: 'get',
        },
      });

      if (!getImport.length) {
        const body = root.get().value.program.body;
        const getImport = j.importDeclaration(
          [j.importSpecifier(j.identifier('get'))],
          j.literal('@ember/object')
        );

        body.unshift(getImport);
      }

      return j.callExpression(j.identifier('get'), [functionExp, ...functionArgs]);
    })
    .toSource();
};

module.exports.type = 'js';
