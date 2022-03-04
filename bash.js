const pwd = require('./pwd');
const ls = require('./ls');
const cat = require('./cat');

process.stdout.write('prompt > ');
process.stdin.on('data', (data) => {
    const string = data.toString().split(' ');
    let cmd
    let arg
        
  if(string.length ===1){
    cmd = string[0];
    pwd(cmd);
  } else{
    arg = string[1]
    cat(arg.trim());
  }
})