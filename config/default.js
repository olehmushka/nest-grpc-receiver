const kafka = require('./kafka');

const hostname = process.env.SERVICE_HOST_NAME || 'localhost';
const port = 8080;

const grpcPort = 3001;
const grpcHost = '0.0.0.0';
const grpcUrl = `${grpcHost}:${grpcPort}`;

const grpc = {
  port: grpcPort,
  host: grpcHost,
  url: grpcUrl,
};

module.exports = {
  server: {
    hostname,
    port,
    grpc, 
    kafka,
  },
};
