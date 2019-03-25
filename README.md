# Cluster Chat

A simple chat application built using Socket.io, customized to run as a cluster using [Docker](https://www.docker.com/) and [PM2](pm2.keymetrics.io).


## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.


### Prerequisites

To run this application you first need to ensure both NodeJS, NPM and Docker are installed on your machine.

#### Install NodeJS and NPM
```
sudo apt-get update
```
```
sudo apt-get install nodejs npm
```
```
nodejs --version
```

#### Install Docker-CE
```
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
```
```
sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable"
```
```
sudo apt-get update
```
```
sudo apt-get install -y docker-ce
```

### Installing

To install the Cluster-Chat you need to first clone the repo and install the dependencies.

#### Clone the Repository

```
git clone https://github.com/kyle-hensman/cluster-chat.git
```

#### Install Dependencies
cd cluster-chat
```
npm install
```

### Start the Applicatoin

the following is a list of options on how to start the Cluster-Chat the application.


## NodeJS

Run a single Nodejs instance of the application.

```
npm run start
```

## NodeJS Cluster

Use NodeJS cluster module to fire up a cluster server of the applicaton.

```
npm run cluster
```

## PM2 Single Instance

Use PM2 to fire up a single instance of the applicaton.

```
pm2 start server.js
```

## PM2 Cluster X4

Use PM2 to fire up a cluster server of the applicaton running on 4 cores.

```
pm2 start server.js -i 4
```

## Docker Container

Use docker to build an image and start the container that will detect how many cores are available, and create a cluster server for your applicaton.

Build the Docker image and start the container.

```
npm run build-image && npm run docker
```


## Deployment

Please visit this link to learn how to [Deploy with PM2](https://pm2.io/doc/en/runtime/guide/easy-deploy-with-ssh/#easy-deploy-with-ssh)


## Built With

* [Express](https://expressjs.com/) - Server
* [Socket.IO](https://socket.io/) - Websockets
* [NPM](https://www.npmjs.com/) - Dependency Management
* [Docker](https://www.docker.com/) - Container Management
* [PM2](pm2.keymetrics.io) - Process Management


## Author

* **Kyle Hensman** - *Other work* - [GitHub](https://github.com/kyle-hensman)


## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details


## Acknowledgments

* Chat application was built using the example provided by Socket.IO
* Inspired by the following [Cam White](https://medium.com/@codeandcam)'s article on [CLustering an Express/Socket.io Server with PM2](https://medium.com/@codeandcam/clustering-an-express-socket-io-server-with-pm2-789d11865f95)