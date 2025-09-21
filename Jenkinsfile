pipeline{
    
        agent any
        tools{
            nodejs "node"
        }
    stages{
        stage("Fetch code"){
            steps{
                echo "========executing FETCH CODE========"
                withCredentials([usernamePassword(credentialsId: 'git-pat', passwordVariable: 'GIT_TOKEN', usernameVariable: 'GIT_USERNAME')]) {
                    def repoUrl = "https://${GIT_USERNAME}:${GIT_PAT}@github.com/victor-mungai/sarabobo.git"
                    git url: repoUrl, branch: 'main'
                    }
            }
            post{
                always{
                    echo "========always========"
                }
                success{
                    echo "========A executed successfully========"
                }
                failure{
                    echo "========A execution failed========"
                }
            }
        }
    }
    
}