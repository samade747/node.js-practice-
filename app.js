const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
    console.log(req.url);
    if(req.url == '/toffe'){
        res.end('salam toffe khayega kya');
    } else if(req.url == '/freshup'){
        res.end('salam fresh up khayega kya')
    } else {
        res.end('hamary pas nai hai ');
    }
});


server.listen(8000, '127.0.0.1', () => {
    console.log('salam han bhaee server chal rha ');
});

// mpm init 
