
# Unit Testing & Circle CI 

## [Circle CI](https://circleci.com/) 
 > Automate development process with continuous integration on cloud or infrastructure.

## Unit Testing
 > make a test code for each unit of a project.

### Unit Testing Tools for Javascript
 * [Jest](https://jestjs.io/)
 * [Mocha.js](https://mochajs.org/)

### Unit Testing Scenario for Javascript
 1. create a Javascript project
    1. package.json
    2. source code (something like sketch.js)
    3. test code
    4. push it to remote (ex. Github)
 2. Circle CI cloud
    1. When you commit & pull, 
    2. Circle CI pull a project from Github
    3. it runs your tests
    4. it notice the result to you (or Github)