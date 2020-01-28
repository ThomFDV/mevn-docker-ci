pipeline {
  agent any

  tools {
    nodejs "recent-nodejs"
  }

  stages {
    stage('Build') {
      steps {
        git 'https://gitlab.com/thomfdv/mevn-docker-ci.git'
        sh 'cd client && npm install'
        sh 'cd server && npm install'
      }

      post {
        success {
            sh 'cd client && npm run unit'
        }
      }
    }
  }
}