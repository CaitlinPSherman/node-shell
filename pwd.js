module.exports = function pwd(cmd){
    process.stdout.write('prompt > ');
    console.log(process.cwd());
    process.stdout.write('\nprompt > ');
}
    

/*module.export={
    pwd:function(cmd){
        process.stdout.write('prompt > ');
        console.log(process.cwd());
        process.stdout.write('\nprompt > ');
    }
}*/