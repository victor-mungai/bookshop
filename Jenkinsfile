pipeline{
    
        agent any
        tools{
            nodejs "node"
        }
    stages{
        stage("Fetch code"){
            steps{
                echo "========executing FETCH CODE========"
                git branch: 'main', url: 'https://github.com/victor-mungai/sarabobo.git'
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