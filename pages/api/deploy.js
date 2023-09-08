const exec = require('child_process').exec;


export default function handler(req, res) {
    exec('sh /code/blog/deploy/deploy.sh', function(error, stdout, stderr) {
        if (error) {
            console.error(`exec error: ${error}`);
            return;
        }
        console.log(`stdout: ${stdout}`);
        console.log(`stderr: ${stderr}`);
    });
    res.status(200).json({ text: 'deploy' });
}
