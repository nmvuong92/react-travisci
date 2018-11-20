var FtpDeploy = require('ftp-deploy');
var ftpDeploy = new FtpDeploy();
 
var config = {
    username: 'epiz_23024084',
    password: 'hTgcfcuhP',
    host: 'ftpupload.net',
    port: 21,
    localRoot: __dirname + "/../build/",
    remoteRoot: "/htdocs",
    include: ['*']
}
    
ftpDeploy.deploy(config, function(err) {
    if (err) console.log(err)
    else console.log('finished');
});