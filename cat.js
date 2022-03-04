const fs = require('fs');

module.exports =function cat(fileName){
        fileName = __dirname+'/'+fileName;
        fs.readFile(fileName,(err, data) => {
                if (err) throw err;
                console.log(data.toString());
    })
}

