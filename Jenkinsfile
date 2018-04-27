#!/usr/bin/env groovy

pipeline {

    agent {
        docker {
            image 'node'
            args '-u root'
        }
    }

    stages {
        stage('Install') {
            steps {
                echo 'Installing...'
                sh 'yarn install'
            }
        }
        stage('Test') {
            steps {
                echo 'Testing...'
                sh 'yarn test'
            }
        }
        stage('Build') {
            steps {
                echo 'Building...'
                sh 'yarn build'
            }
        }
    }
}
