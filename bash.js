

process.stdout.write('prompt > ');

process.stdin.on('data', (data) => {
  const cmd = data.toString().trim();

  if (cmd === 'pwd') {
    console.log(process.cwd())
    process.stdout.write('\nprompt > ');
  } else {
    process.stdout.write('You typed: ' + cmd);
    process.stdout.write('\nprompt > ');
  }
  //if (cmd === 'pwd') {console.dir(object.pathName)}
})
