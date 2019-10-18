node {
    def app
    stage('Clone') {
        // Clone the repository.
        checkout scm
    }
    stage('Build') {
        // Build the Docker image.
        app = docker.build("arraying/citestapp")
    }
    stage('Push image') {
        // Push the Docker image to Docker Hub.
        docker.withRegistry('https://registry.hub.docker.com', 'docker-hub-credentials') {
            app.push("${env.BUILD_NUMBER}")
            app.push("latest")
        }
    }
}