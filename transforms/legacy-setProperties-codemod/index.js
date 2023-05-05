const { getParser } = require('codemod-cli').jscodeshift;

module.exports = function transformer(file, api) {
  const j = getParser(api);
  const root = j(file.source);

  return root
    .find(j.CallExpression, {
      callee: { property: { name: 'setProperties', type: 'Identifier' } },
    })
    .replaceWith((p) => {
      const functionExp = p.value.callee.object;
      const functionArgs = p.value.arguments;

      const setPropertiesImport = root.find(j.ImportSpecifier, {
        imported: {
          type: 'Identifier',
          name: 'setProperties',
        },
      });

      if (!setPropertiesImport.length) {
        const body = root.get().value.program.body;
        const setPropertiesImport = j.importDeclaration(
          [j.importSpecifier(j.identifier('setProperties'))],
          j.literal('@ember/object')
        );

        body.unshift(setPropertiesImport);
      }

      return j.callExpression(j.identifier('setProperties'), [functionExp, ...functionArgs]);
    })
    .toSource();
};

module.exports.type = 'js';
