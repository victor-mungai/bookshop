pipeline {
    agent any

    environment {
        dockerRegistry = 'docker.io'
        FRONTEND_IMAGE = "victormungai/sarabobo-frontend"
        PROXY_IMAGE = "victormungai/sarabobo-proxy"
        DB_IMAGE = "victormungai/sarabobo-db"
        APACHE_IMAGE = "victormungai/sarabobo-apache"
    }

    stages {
        stage("Fetch code") {
            steps {
                git branch: 'main', url: 'https://github.com/victor-mungai/sarabobo.git', credentialsId: 'git-pat'
            }
        }

        stage("Build & Push Frontend Image") {
            when {
                anyOf {
                    changeset "frontend/**"
                    expression { return env.CHANGE_ID == null && env.BUILD_NUMBER == '1' }
                }
            }
            steps {
                script {
                    def dockerImage = docker.build("${FRONTEND_IMAGE}:${BUILD_NUMBER}", "-f frontend/Dockerfile .")
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
                    def dockerImage = docker.build("${PROXY_IMAGE}:${BUILD_NUMBER}", "-f proxy/Dockerfile .")
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
                    def dockerImage = docker.build("${DB_IMAGE}:${BUILD_NUMBER}", "-f db/Dockerfile .")
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
                    def dockerImage = docker.build("${APACHE_IMAGE}:${BUILD_NUMBER}", "-f apache/Dockerfile .")
                    docker.withRegistry(dockerRegistry, 'dockerhub-credentials') {
                        dockerImage.push("${BUILD_NUMBER}")
                        dockerImage.push("latest")
                    }
                }
            }
        }

        stage("Cleanup Unused Images") {
            steps {
                sh 'docker image prune -f --filter "until=24h"'
            }
        }
    }
}
