// const fs = require('fs');

// const callback = (err, data) => {
//     console.log(data);
// }

// const file = fs.readFile('test.txt', {
//     encoding: 'utf8'
// }, callback)

// 기본 Hello world node 예제
// const http = require('http');

// const hostname = '127.0.0.1';
// const port = 3000;

// // req : 요청 객체 , res : 응답 객체
// const server = http.createServer((req,res) => {
//     // console.log(req.url);
//     if (req.url === '/') {
//         res.statusCode = 200;
//         res.setHeader('Content-Type', 'text/plain');
//         res.end('Hello Yeoandante!\n');
//     } else if(req.url === '/users') {
//         const users = [
//             {name : 'Alice'},
//             {name : 'Beck'}
//         ];
//         res.statusCode = 200;
//         res.setHeader('Content-Type', 'application/json');
//         res.end(JSON.stringify(users));
//     }
// });

// server.listen(port, hostname, () => {
//     console.log(`Server running at http://${hostname}:${port}`);
// });


// // express 예제
// const express = require('express')
// // server의 중추 역할을 하는 app
// // morgan : 요청에 대한 응답을 담당한다.(logger)
// const logger = require('morgan')
// const app = express()

// next : 다음 미들웨어를 실행시키기 위한 callback 함수
// const mw = (req, res, next) => {
//     console.log('mw!')
//     // next 함수를 꼭 붙여줘야한다. 그래야 다음 함수를 실행 할 수 있다.
//     next()
// }

// const mw2 = (req, res, next) => {
//     console.log('mw2!')
//     // next 함수를 꼭 붙여줘야한다. 그래야 다음 함수를 실행 할 수 있다.
//     next()
// }
// 미들웨어를 순서가 중요하다. 서버의 동작이 결정된다.


// app.use(mw2)
// app.use(mw)

// // 일반 미들웨어 vs 에러 미들웨어
// const mw = (req, res, next) => {
//     // throw Error('error!')
//     next()
// }
// // error 미들웨어는 err 인자를 추가로 받는다.
// const errorMw = (err, req, res, next) => {
//     console.log(err.message)
// }

// app.use(logger('dev'))
// app.use(mw)
// app.use(errorMw)

// app.listen(3000, () => console.log('running'))


// Express Hello world! 예제 

const express = require('express');
const logger = require('morgan');
const app = express();
const users = [{name: 'Alice'}] // todo

app.get('/', (req,res) => res.send('Hello World!'));
app.get('/users', (req,res) => res.json(users));

app.listen(3000, () => console.log('Example app listening on port 3000!'));