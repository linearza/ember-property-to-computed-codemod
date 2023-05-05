# ember-v2-codemods

A collection of codemods to primarily to get an outdated codebase up to an acceptable version 2 state, in preparation for further upgrades.

### Complementary codemods
* https://github.com/ember-codemods/ember-3x-codemods
* https://github.com/jmdejno/lil-codemods


## Usage

To run a specific codemod from this project, you would run the following:

```
npx ember-v2-codemods <TRANSFORM NAME> path/of/files/ or/some**/*glob.js

# or

yarn global add ember-v2-codemods
ember-v2-codemods <TRANSFORM NAME> path/of/files/ or/some**/*glob.js
```

## Local Usage
```
node ./bin/cli.js <TRANSFORM NAME> path/of/files/ or/some**/*glob.js
```

## Transforms

<!--TRANSFORMS_START-->
* [legacy-computed-codemod](transforms/legacy-computed-codemod/README.md)
* [legacy-get-codemod](transforms/legacy-get-codemod/README.md)
* [legacy-getProperties-codemod](transforms/legacy-getProperties-codemod/README.md)
* [legacy-observer-codemod](transforms/legacy-observer-codemod/README.md)
* [legacy-set-codemod](transforms/legacy-set-codemod/README.md)
* [legacy-setProperties-codemod](transforms/legacy-setProperties-codemod/README.md)
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