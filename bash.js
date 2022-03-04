const pwd = require("./pwd");
const ls = require("./ls");
const cat = require("./cat");
const curl = require("./curl");

process.stdout.write("prompt > ");
process.stdin.on("data", (data) => {
  const string = data.toString().split(" ");
  let cmd;
  let arg;

  cmd = string[0];
  arg = string[1];

  if (cmd === "curl") {
    curl(arg);
  }
});

//   if(string.length ===1){
//     cmd = string[0];
//     pwd(cmd);
//   } else{
//     arg = string[1]
//     cat(arg.trim());
//   }
// })
