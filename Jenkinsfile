pipeline {
  agent any
  
  tools {
    nodejs "recent-nodejs"
  }

  stages {
    stage('Clonning Repository') {
      steps {
          git 'https://github.com/ThomFDV/mevn-docker-ci.git'
      }
    }
    stage('Install Packages') {
      steps {
        sh 'cd client && npm install'
        sh 'cd server && npm install'
      }
    }
    stage('Test and Build') {
      parallel {
        stage('Run Tests') {
          steps {
            sh 'cd client && npm run unit'
          }
        }
        stage('Create Build Artifacts') {
          steps {
            sh 'cd client && npm run build'
          }
        }
      }
    }
    stage('Deployment') {
        steps {
          withAWS(region:'eu-west-3',credentials:'aws-s3-jenkins') {
            s3Delete(bucket: 'thomfdv-ci-project', path:'**/*')
            s3Upload(bucket: 'thomfdv-ci-project', workingDir:'client/build', includePathPattern:'**/*');
          }
        }
    }
  }
}