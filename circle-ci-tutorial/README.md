
# Unit Testing & Circle CI 

## [Circle CI](https://circleci.com/) 
 > Automate development process with continuous integration on cloud or infrastructure.

## Unit Testing
 > make a test code for each unit of a project.

## Unit Testing Tools for Javascript
 * [Jest](https://jestjs.io/)
 * [Mocha.js](https://mochajs.org/)

## Unit Testing Scenario for Javascript
 1. create a Javascript project
    1. package.json
    2. source code (something like sketch.js)
    3. test code
    4. push it to remote (ex. GitHub)
 2. Circle CI cloud
    1. When you commit & pull, 
    2. Circle CI pull a project from GitHub
    3. it runs your tests
    4. it notice the result to you (or GitHub)

## make node project and create source/test code.

 > see `sum.js` and `sum.test.js`.

## Circle CI setting
 1. Create a  forder named `.circleci` in the root directory.
 2. add a file `config.yml` in `.circleci` directory
 3. write `config.yml` and push changes to GitHub.

 * Example config.yml
```yml
version: 2.1
orbs:
  node: circleci/node@3.0.0
workflows:
  node-tests:
    jobs:
      - node/test
```