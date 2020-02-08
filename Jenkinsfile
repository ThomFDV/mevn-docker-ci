pipeline {
  agent any

  tools {
    nodejs "recent-nodejs"
  }

  stages {
    stage('Build') {
      steps {
        git 'https://github.com/ThomFDV/mevn-docker-ci.git'
        sh 'cd client && npm install'
        sh 'cd client && npm run build'
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