#!/usr/bin/env groovy

pipeline {

    agent {
        docker {
            image 'node'
            args '-u root'
        }
    }

    stages {
        stage('Build') {
            environment {
                GA_TRACKER_ID = credentials('GA_TRACKER_ID')
                echo credentials('GA_TRACKER_ID')
            }
            steps {
                echo params.GA_TRACKER_ID
                echo 'Building...'
                sh 'npm run prebuild'
                sh 'npm run build'
            }
        }
    }
}
