const { getParser } = require('codemod-cli').jscodeshift;

module.exports = function transformer(file, api) {
  const j = getParser(api);

  return (
    j(file.source)
      .find(j.CallExpression, 
        { callee: { property: { name: "property" }, object: { type: "FunctionExpression" } } 
      })
      .replaceWith((p) => {
        const functionExp = p.value.callee.object
     	  const functionArgs = p.value.arguments
                        
        return j.callExpression(
          j.identifier("computed"),
          [...functionArgs, functionExp],
        );
      })
      .toSource()
  );
};

module.exports.type = 'js';