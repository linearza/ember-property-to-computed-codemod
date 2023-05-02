# ember-property-to-computed-codemod


## Usage

```
npx ember-property-to-computed-codemod ember-property-to-computed-codemod path/of/files/ or/some**/*glob.js

# or

yarn global add ember-property-to-computed-codemod
ember-property-to-computed-codemod ember-property-to-computed-codemod path/of/files/ or/some**/*glob.js
```

## Local Usage
```
node ./bin/cli.js ember-property-to-computed-codemod path/of/files/ or/some**/*glob.js
```

## Input / Output

<!--FIXTURES_TOC_START-->
From
```
const myObject = {
  myTotals: (function() {
    return get(this, "model.total") || 0;
  }).property("model.total"),
  
  shouldShow: ( function() {
    return (get(this, "model.id") !== null) && get(this, "user.isAdmin");
  }).property("model.id", "user.isAdmin"),
  
  isDisabled: Em.computed("model.isDirty", "isDirty", function() {
    return get(this, "model.isDisabled") < 1 || get(this, "isDirty");
  }),
  
  isModern: computed("isDirty", "model.length", function() {
    return get(this, "model.length") < 1 || get(this, "isDirty");
  })
}
```
To
```
const myObject = {
  myTotals: computed("model.total", function() {
    return get(this, "model.total") || 0;
  }),
  
  shouldShow: computed("model.id", "user.isAdmin", function() {
    return (get(this, "model.id") !== null) && get(this, "user.isAdmin");
  }),
  
  isDisabled: Em.computed("model.isDirty", "isDirty", function() {
    return get(this, "model.isDisabled") < 1 || get(this, "isDirty");
  }),
  
  isModern: computed("isDirty", "model.length", function() {
    return get(this, "model.length") < 1 || get(this, "isDirty");
  })
}
```
<!--FIXTURES_TOC_END-->

<!--FIXTURES_CONTENT_START-->

<!--FIXTURES_CONTENT_END-->