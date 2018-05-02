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
                sh 'npm run-script install'
            }
        }
        stage('Test') {
            steps {
                echo 'Testing...'
                sh 'npm run-script test'
            }
        }
        stage('Build') {
            steps {
                echo 'Building...'
                sh 'npm run-script build'
            }
        }
    }
}
