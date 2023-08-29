const http = require('http');
const exec = require('child_process').exec;

http.createServer(function (req, res) {
  console.log(`exec deploy.sh`);
  exec('sh /code/blog/deploy.sh', function(error, stdout, stderr) {
    if (error) {
      console.error(`exec error: ${error}`);
      return;
    }
    console.log(`stdout: ${stdout}`);
    console.log(`stderr: ${stderr}`);
  });
  res.end();
}).listen(9000);
