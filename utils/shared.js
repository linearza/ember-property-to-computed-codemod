'use strict';

// add or merge
module.exports.updateImports = function updateImports(j, root, specifierName, declarationName) {
  const existingImports = root.find(j.ImportSpecifier, {
    imported: {
      type: 'Identifier',
      name: specifierName,
    },
  });

  if (existingImports.length) {
    return root;
  }

  const existingImportDeclarations = root.find(j.ImportDeclaration, {
    source: {
      value: declarationName,
    },
  });

  const newImportSpecifier = j.importSpecifier(j.identifier(specifierName));

  if (!existingImportDeclarations.length) {
    const body = root.get().value.program.body;

    const newImport = j.importDeclaration([newImportSpecifier], j.literal(declarationName));

    body.unshift(newImport);

    return root;
  }

  existingImportDeclarations.forEach((objectImport) => {
    const existingImportsCheck = root.find(j.ImportSpecifier, {
      imported: {
        type: 'Identifier',
        name: specifierName,
      },
    });

    if (existingImportsCheck.length) return;

    return j(objectImport).replaceWith(
      j.importDeclaration(
        [...objectImport.node.specifiers, newImportSpecifier],
        objectImport.node.source
      )
    );
  });

  return root;
};

module.exports.type = 'js';
