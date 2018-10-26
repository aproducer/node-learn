let fs=require('fs');
module.exports={
    rander:function (path) {
        fs.readFile(`./files${path}`, 'utf-8', function (err, info) {
            // console.log(info);
            res.write(info);
            res.end();
        })
    }
}