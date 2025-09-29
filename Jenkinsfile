pipeline {
    agent any

    environment {
        dockerRegistry = 'docker.io'
        FRONTEND_IMAGE = "victormungai/sarabobo"
        PROXY_IMAGE = "victormungai/sarabobo"
        DB_IMAGE = "victormungai/sarabobo"
        APACHE_IMAGE = "victormungai/sarabobo"
    }

    stages {
        stage("Fetch code") {
            steps {
                git branch: 'main', url: 'https://github.com/victor-mungai/sarabobo.git', credentialsId: 'git-pat'
            }
        }

        stage("Build & Push Frontend Image") {
            steps {
                
                    script {
                        def dockerImage = docker.build("${FRONTEND_IMAGE}:frontend-${BUILD_NUMBER}", "-f frontend/Dockerfile .")
                        docker.withRegistry(dockerRegistry, 'dockerhub-credentials') {
                            dockerImage.push("${BUILD_NUMBER}")
                            dockerImage.push("latest")
                        }
                    }
                
            }
        }

        stage("Build & Push Proxy Image") {
            when {
                anyOf {
                    changeset "proxy/**"
                    expression { return env.CHANGE_ID == null && env.BUILD_NUMBER == '1' } 
                }
            }
            steps {
                
                    script {
                        def dockerImage = docker.build("${PROXY_IMAGE}:proxy-${BUILD_NUMBER}", "-f proxy/Dockerfile .")
                        docker.withRegistry(dockerRegistry, 'dockerhub-credentials') {
                            dockerImage.push("${BUILD_NUMBER}")
                            dockerImage.push("latest")
                        }
                    }
                
            }
        }

        stage("Build & Push DB Image") {
            when {
                anyOf {
                    changeset "db/**"
                    expression { return env.CHANGE_ID == null && env.BUILD_NUMBER == '1' } 
                }
            }
            steps {
                
                    script {
                        def dockerImage = docker.build("${DB_IMAGE}:db-${BUILD_NUMBER}", "-f db/Dockerfile .")
                        docker.withRegistry(dockerRegistry, 'dockerhub-credentials') {
                            dockerImage.push("${BUILD_NUMBER}")
                            dockerImage.push("latest")
                        }
                    }
                
            }
        }

        stage("Build & Push Apache Image") {
            when {
                anyOf {
                    changeset "apache/**"
                    expression { return env.CHANGE_ID == null && env.BUILD_NUMBER == '1' } 
                }
            }
            steps {
              
                    script {
                        def dockerImage = docker.build("${APACHE_IMAGE}:apache-${BUILD_NUMBER}", " -f apache/Dockerfile .")
                        docker.withRegistry(dockerRegistry, 'dockerhub-credentials') {
                            dockerImage.push("${BUILD_NUMBER}")
                            dockerImage.push("latest")
                        }
                    }
                
            }
        }

        stage("Cleanup Unused Images") {
            steps {
                sh 'docker image prune -a -f' 
            }
        }
    }
}