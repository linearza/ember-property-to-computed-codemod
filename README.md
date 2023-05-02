# ember-property-to-computed-codemod


A collection of codemods for ember-property-to-computed-codemod.

## Usage

To run a specific codemod from this project, you would run the following:

```
npx ember-property-to-computed-codemod <TRANSFORM NAME> path/of/files/ or/some**/*glob.js

# or

yarn global add ember-property-to-computed-codemod
ember-property-to-computed-codemod <TRANSFORM NAME> path/of/files/ or/some**/*glob.js
```

## Local Usage
```
node ./bin/cli.js <TRANSFORM NAME> path/of/files/ or/some**/*glob.js
```

## Transforms

<!--TRANSFORMS_START-->
* [ember-property-to-computed-codemod](transforms/ember-property-to-computed-codemod/README.md)
<!--TRANSFORMS_END-->

## Contributing

### Installation

* clone the repo
* change into the repo directory
* `yarn`

### Running tests

* `yarn test`

### Update Documentation

* `yarn update-docs`