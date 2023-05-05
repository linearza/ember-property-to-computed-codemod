const { getParser } = require('codemod-cli').jscodeshift;

module.exports = function transformer(file, api) {
  const j = getParser(api);
  const root = j(file.source);

  return root
    .find(j.CallExpression, {
      callee: { property: { name: 'getProperties', type: 'Identifier' } },
    })
    .replaceWith((p) => {
      const functionExp = p.value.callee.object;
      const functionArgs = p.value.arguments;

      const getPropertiesImport = root.find(j.ImportSpecifier, {
        imported: {
          type: 'Identifier',
          name: 'getProperties',
        },
      });

      if (!getPropertiesImport.length) {
        const body = root.get().value.program.body;
        const getPropertiesImport = j.importDeclaration(
          [j.importSpecifier(j.identifier('getProperties'))],
          j.literal('@ember/object')
        );

        body.unshift(getPropertiesImport);
      }

      return j.callExpression(j.identifier('getProperties'), [functionExp, ...functionArgs]);
    })
    .toSource();
};

module.exports.type = 'js';
