www.theodortomas.com
[![Build Status](https://jenkins.theodortomas.com/buildStatus/icon?job=theodortomas.com?style=plastic)](https://jenkins.theodortomas.com/job/theodortomas.com/)
======

Professional website bio containing a small bio, social media links and contact info.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

##### Clone project.

```
git clone https://github.com/TheodorTomas/theodortomas.com.git 
```

## Installing


#### Prerequisites

Install homebrew(macOsS) to enable installing npm via brew.
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

##### Install application dependencies.
```
npm install
```

## Running the application
##### Run node server to serve application on http://localhost:3000.
```
npm run start
```

Navigate to http://localhost:3000 in web browser.
```
open http://localhost:3000
```

Deploy ngrok tunnel.
```
npm run start:tunnel
```

Run in production mode.
```
npm run start:production
```

## Running the tests
##### Runs all tests' using enzyme, jest, sinon, eslint and stylelint.
```
npm test
```

Navigate to test coverage
```
open coverage/lcov-report/index.html
```

Run lint testing javascript and css styling
```
npm run lint
```

Run eslint testing javascript styling - see [package.json](/package.json) for config
```
npm run lint:eslint
```

Run stylelint testing css styling - see [stylelintrc](/.stylelintrc) for config
```
npm run lint:css
```

## Deployment

Jenkins is setup to test and build the project in a node docker container
while nginx serves the application.

The build is described in [Jenkinsfile](/Jenkinsfile). Website can located at
[jenkins.theodortomas.com](https://jenkins.theodortomas.com)


## License

This project has been built using react-boilerplate - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* [react-boilerplate](https://github.com/react-boilerplate/react-boilerplate)
* [CI/CD jenkins tutorial](https://www.digitalocean.com/community/tutorials/how-to-set-up-continuous-integration-pipelines-in-jenkins-on-ubuntu-16-04)
