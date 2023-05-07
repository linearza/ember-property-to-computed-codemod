# legacy-setProperties-codemod


## Usage

```
npx ember-v2-codemods legacy-setProperties-codemod path/of/files/ or/some**/*glob.js

# or

yarn global add ember-v2-codemods
ember-v2-codemods legacy-setProperties-codemod path/of/files/ or/some**/*glob.js
```

## Local Usage
```
node ./bin/cli.js legacy-setProperties-codemod path/of/files/ or/some**/*glob.js
```

## Input / Output

From
```
import { get } from "@ember/object";

const myClass = {
  oldSetProps() {
    this.setProperties({
      propOne: "valOne",
      propTwo: "valTwo",
    })
  },

  newSetProps() {
    setProperties(this, {
      propOne: "valOne",
      propTwo: "valTwo",
    })
  }
}
```

To
```
import { get, setProperties } from "@ember/object";

const myClass = {
  oldSetProps() {
    setProperties(this, {
      propOne: "valOne",
      propTwo: "valTwo",
    })
  },

  newSetProps() {
    setProperties(this, {
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