# legacy-observer-codemod


## Usage

```
npx ember-v2-codemods legacy-observer-codemod path/of/files/ or/some**/*glob.js

# or

yarn global add ember-v2-codemods
ember-v2-codemods legacy-observer-codemod path/of/files/ or/some**/*glob.js
```

## Local Usage
```
node ./bin/cli.js legacy-observer-codemod path/of/files/ or/some**/*glob.js
```

## Input / Output

From
```
const myClass = {
  propertyChanged: (function() {
    return Em.run.debounce(this, () => {
      this.doSomething()
    }, 300);
  }).observes("arrayProps.@each.value", "anotherProp", "thirdOne"),
}
```

To
```
import { observer } from "@ember/object";
const myClass = {
  propertyChanged: observer("arrayProps.@each.value", "anotherProp", "thirdOne", function() {
    return Em.run.debounce(this, () => {
      this.doSomething()
    }, 300);
  }),
} 
```

<!--FIXTURES_TOC_START-->
<!--FIXTURES_TOC_END-->

<!--FIXTURES_CONTENT_START-->
<!--FIXTURES_CONTENT_END-->