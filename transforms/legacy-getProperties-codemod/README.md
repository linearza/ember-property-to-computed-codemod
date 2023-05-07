# legacy-getProperties-codemod


## Usage

```
npx ember-v2-codemods legacy-getProperties-codemod path/of/files/ or/some**/*glob.js

# or

yarn global add ember-v2-codemods
ember-v2-codemods legacy-getProperties-codemod path/of/files/ or/some**/*glob.js
```

## Local Usage
```
node ./bin/cli.js legacy-getProperties-codemod path/of/files/ or/some**/*glob.js
```

## Input / Output

From
```
import { setProperties } from "@ember/object";
import { alias } from "@ember/object";

const myClass = {
  oldGetProps() {
    this.getProperties({
      propOne: "valOne",
      propTwo: "valTwo",
    })
  },

  newGetProps() {
    getProperties(this, {
      propOne: "valOne",
      propTwo: "valTwo",
    })
  }
}
```

To
```
import { setProperties, getProperties } from "@ember/object";
import { alias } from "@ember/object";

const myClass = {
  oldGetProps() {
    getProperties(this, {
      propOne: "valOne",
      propTwo: "valTwo",
    })
  },

  newGetProps() {
    getProperties(this, {
      propOne: "valOne",
      propTwo: "valTwo",
    })
  }
}
```

<!--FIXTURES_TOC_START-->
<!--FIXTURES_TOC_END-->

<!--FIXTURES_CONTENT_START-->
<!--FIXTURES_CONTENT_END-->