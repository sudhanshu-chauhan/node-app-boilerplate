pipeline {
  agent {
    docker {
      image 'node:10.15.3',
      args '-p 3000:3000'
    }
  }
  stages {
    stage('Build') {
      steps{
        sh 'npm install'
      }
    }
  }
}
