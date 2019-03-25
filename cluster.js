const cluster = require('cluster');

if (cluster.isMaster) {
  // Count the machines CPU's
  const cpuCount = require('os').cpus().length;

  // Create a worker for each CPU
  for (let i = 0; i < cpuCount; i += 1) {
    cluster.fork();
  }

  // Listen for dying workers
  cluster.on('exit', () => {
    cluster.fork();
  });
} else {
  require('./server');
}