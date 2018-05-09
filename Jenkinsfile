#!groovy
node {


    currentBuild.result = "SUCCESS"

    try {

       stage('Checkout'){

          checkout scm
       }

       docker.image('node:9').inside{
           stage('Test'){

               env.NODE_ENV = "test"

                   print "Environment will be : ${env.NODE_ENV}"

                   sh 'node -v'
                   sh 'npm prune'
                   sh 'npm install'
                   sh 'npm test'

           }

           stage('Build Docker'){
               echo 'Building on docker..'
                   echo 'Nothing to see here. Move along.'
           }

           stage('Deploy'){
               echo 'Push to Repo'
                   echo 'Nothing to see here either. Move along'
           }

           stage('Cleanup'){

               echo 'prune and cleanup'
                   sh 'npm prune'
                   sh 'rm node_modules -rf'

                   mail body: 'project build successful',
                        from: 'rakesh.balasubramanian@gmail.com',
                        replyTo: 'rakesh.balasubramanian@gmail.com',
                        subject: 'project build successful',
                        to: 'rakesh.balasubramanian@gmail.com'
           }



       }

    }
    catch (err) {
        currentBuild.result = "FAILURE"

        mail body: 'project build error is here: ${env.BUILD_URL}' ,
                    from: 'rakesh.balasubramanian@gmail.com',
                    replyTo: 'rakesh.balasubramanian@gmail.com',
                    subject: 'project build failed',
                    to: 'rakesh.balasubramanian@gmail.com'

        throw err
    }

}
