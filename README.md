[theodortomas.com](https://theodortomas.com)
======
[![Build Status](https://jenkins.theodortomas.com/buildStatus/icon?job=theodortomas.com&.png?style=flat)](https://jenkins.theodortomas.com/job/theodortomas.com/)
[![codecov coverage](https://img.shields.io/codecov/c/github/TheodorTomas/theodortomas-dot-com.svg?style=flat)](https://codecov.io/gh/TheodorTomas/theodortomas-dot-com)


Professional website containing a small bio, links and contact info. Written using ES6, React, Webpack, Babel 
amongst other technologies. Powered by Nginx, Node.js and NPM. Continuous deployment implemented with Jenkins and Docker.

Server Side Rendering implemented with Node, Express and PM2.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing 
purposes. See deployment for notes on how to deploy the project on a live system.

##### Clone project.

```
git clone https://github.com/TheodorTomas/theodortomas.com.git 
```

#### Installing Prerequisites

Install homebrew(OS X) to enable installing npm via brew.
```
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

Install node and npm via homebrew(macOsS).
```
brew install node
```

Install node and npm via apt-get(Ubuntu).
```
apt-get update
apt-get install nodejs
apt-get install npm
ln -s /usr/bin/nodejs /usr/bin/node
```

Install Yarn along with Node.js
```
brew install yarn
```

Install Yarn without Node.js
```
brew install yarn --without-node
```

Install Yarn (Ubuntu)
```
curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
sudo apt-get update && sudo apt-get install yarn
```

##### Install application dependencies.
```
npm install
```

## Running the application
Run client application on: http://localhost:3000
```
npm start
```

Open in browser.
```
open http://localhost:3000
```

## Running SSR implementation
Build application on changes.
```
npm run start:build
```

Run SSR Express server
```
npm run start:server:dev
```


Open in browser.
```
open http://localhost:3000
```

## Running the tests
Run all tests' using enzyme, jest, eslint and stylelint.
```
npm test
```

Run unit tests'
```
npm run test:unit
```

Run unit tests with watcher'
```
npm run test:watch
```

Run lint testing for javascript and css styling.
```
npm run lint
```

Run eslint testing for javascript styles - see [eslintrc.js](/.eslintrc.js) for config.
```
npm run test:lint:js
```

Run stylelint testing for css styles - see [stylelintrc](/.stylelintrc) for config.
```
npm run test:lint:css
```

Navigate to test coverage.
```
open coverage/lcov-report/index.html
```

## Deployment

Jenkins is setup to test and build the project in a node docker container
while nginx serves the application.

The build is described in [Jenkinsfile](/Jenkinsfile). Website can be located at:
[jenkins.theodortomas.com](https://jenkins.theodortomas.com)


## License

This project has been bootstrapped with create-react-app - see the [LICENSE.md](LICENSE.md) file for details.

## Acknowledgments

* [create-react-app](https://github.com/facebook/create-react-app)
* [CI/CD jenkins tutorial](https://www.digitalocean.com/community/tutorials/how-to-set-up-continuous-integration-pipelines-in-jenkins-on-ubuntu-16-04)
* [SSR with Express](https://github.com/ayroblu/ssr-cra-v2.1)
