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
                sh 'npm run preinstall'
                sh 'npm install'
                sh 'npm run postinstall'
            }
        }
        stage('Test') {
            steps {
                echo 'Testing...'
                sh 'npm run pretest'
                sh 'npm run test'
            }
        }
        stage('Build') {
            environment {
                GA_TRACKER_ID = credentials('GA_TRACKER_ID')
            }
            steps {
                echo 'Building...'
                sh 'npm run prebuild'
                sh 'npm run build'
            }
        }
    }
}
