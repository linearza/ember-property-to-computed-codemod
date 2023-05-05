# legacy-get-codemod


## Usage

```
npx ember-v2-codemods legacy-get-codemod path/of/files/ or/some**/*glob.js

# or

yarn global add ember-v2-codemods
ember-v2-codemods legacy-get-codemod path/of/files/ or/some**/*glob.js
```

## Local Usage
```
node ./bin/cli.js legacy-get-codemod path/of/files/ or/some**/*glob.js
```

## Input / Output

From
```
const myClass = {
  oldGetter: computed("myProp", function() {
    return this.get("myProp").length < 1;
  }),
  
  newGetter: computed("myProp", function() {
    return get(this, "myProp").length < 1;
  }),
}
```

To
```
import { get } from "@ember/object";
const myClass = {
  oldGetter: computed("myProp", function() {
    return get(this, "myProp").length < 1;
  }),
  
  newGetter: computed("myProp", function() {
    return get(this, "myProp").length < 1;
  }),
}
```

<!--FIXTURES_TOC_START-->
<!--FIXTURES_TOC_END-->

<!--FIXTURES_CONTENT_START-->
<!--FIXTURES_CONTENT_END-->