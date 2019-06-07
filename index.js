// const fs = require('fs');

// const callback = (err, data) => {
//     console.log(data);
// }

// const file = fs.readFile('test.txt', {
//     encoding: 'utf8'
// }, callback)


// 기본 Hello world node 예제
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

// req : 요청 객체 , res : 응답 객체
const server = http.createServer((req,res) => {
    console.log('login...');
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World\n');
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}`);
});
