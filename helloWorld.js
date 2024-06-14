var http = require('http');

var fs = require('fs');

http.createServer(function(request, response) {
    var name = require('url').parse(request.url, true).query.name;

    if(name === undefined) name = 'world';

    if(name == 'burningbirg'){

        var file = 'phoenix5a.png';

        fs.stat(file, function (err, stats) {
            if(err) {
                console.error(err);
                response.writeHead(200, {'Content-Type': 'text/plain'});
                response.end('Sorry! Please try again.');
            }else{
                var img = fs.readFileSync(file);
                response.contentType = 'image/png';
                response.contentType = stats.size;
                response.end(img, 'binary');
            }
        });

    }else{
        response.writeHead(200, {'Content-Type': 'text/plain'});
        response.end('Hello ' + name +  '\n');
    }
}).listen(8124);

console.log('Server is running at http://127.0.0.1:8124');