pipeline {
  agent{
    docker{
      image: 'node:10-jessie',
      args: '-p 3000:3000'
    }
  }
  stages{
    stage('Build'){
      steps{
        sh 'npm install'
      }
    }
  }
}
