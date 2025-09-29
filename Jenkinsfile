pipeline{

        agent any
        tools{
            nodejs "node"
        }
        environment{
            dockerRegistry = "https://index.docker.io/v1/"
        }
    stages{
        stage("Fetch code"){
            steps{
               
                git branch: 'main', url: 'https://github.com/victor-mungai/sarabobo.git', credentialsId: 'git-pat'
            }
            
        }
        stage("BUILD FRONTEND IMAGE"){
            steps{
                dir("frontend"){
                    script{
                        dockerImage = docker.build("victormungai/sarabobo:$BUILD_NUMBER", "-f Dockerfile .")
                    }
                }
            }
            
        }

        stage("PUSH FRONTEND IMAGE TO DOCKER HUB"){
            steps{



                
                dir("frontend"){
                    script{
                        docker.withRegistry(dockerRegistry, 'dockerhub-credentials') {
                            dockerImage.push('latest')
                            dockerImage.push("$BUILD_NUMBER")
                        }
                    } 
                }
            }
        
        }
        stage("BUILD PROXY IMAGE"){
            steps{
                
                when{
                   changeset "proxy/*"
                }
                dir("proxy"){
                    script{
                        dockerImage = docker.build("victormungai/sarabobo-proxy:$BUILD_NUMBER", "-f Dockerfile .")
                    }
                }
            }
            
        }
        stage("PUSH PROXY IMAGE TO DOCKER HUB"){
            steps{
                
                when{
                   changeset "proxy/*"  
                   //I'm using this to reduce unnecessary builds and pushes to docker hub if there are no changes in the proxy folder hence lower pipeline run times
                }
                dir("proxy"){
                    script{
                        docker.withRegistry(dockerRegistry, 'dockerhub-credentials') {
                            dockerImage.push('latest')
                            dockerImage.push("$BUILD_NUMBER")
                        }
                    } 
                }
            }
    }
        stage("BUILD DB IMAGE"){
            steps{
                
                when{
                   changeset "db/*"
                }
                dir("db"){
                    script{
                        dockerImage = docker.build("victormungai/sarabobo-db:$BUILD_NUMBER", "-f Dockerfile .")
                    }
                }
            }
            
        }
        stage("PUSH DB IMAGE TO DOCKER HUB"){
            steps{
                
                when{
                   changeset "db/*"
                }
                dir("db"){
                    script{
                        docker.withRegistry(dockerRegistry, 'dockerhub-credentials') {
                            dockerImage.push('latest')
                            dockerImage.push("$BUILD_NUMBER")
                        }
                    } 
                }
            }
    
}

stage("BUILD APACHE IMAGE"){
            steps{
                
                when{
                   changeset "apache/*"
                }
                dir("apache"){
                    script{
                        dockerImage = docker.build("victormungai/sarabobo-apache:$BUILD_NUMBER", "-f Dockerfile .")
                    }
                }
            }
            
        }
        stage("PUSH APACHE IMAGE TO DOCKER HUB"){
            steps{
                
                when{
                   changeset "apache/*"
                }
                dir("apache"){
                    script{
                        docker.withRegistry(dockerRegistry, 'dockerhub-credentials') {
                            dockerImage.push('latest')
                            dockerImage.push("$BUILD_NUMBER")
                        }
                    } 
                }
            }
    
}

        stage("Cleanup Unused Images"){
            steps{
                sh 'docker rmi -f $(docker images -a -q)'  
                //This is to avoid disk space issues on the docker host
            }
        
    } 

}
}
