/**
 * Created by Macbook on 2018/10/23.
 */
var http=require('http');
var change=require('./index');
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain;charset=utf-8'});
    res.end(change(req.url));
}).listen(3000);

