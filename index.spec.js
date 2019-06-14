// spec 코드는 보통 테스트 파일 (폴더를 구분해서 만드는 경우도 많다)
// 첫번쨰 인자로는 테스트할 것, 두번째 인자로는 함수를 넘겨주는데 테스트코드를 작성한다.
const assert = require('assert');
const should = require('should');
const request = require('supertest');
const app = require('./index');



describe('GET /users', () => {
    it('배열을 반환한다', (done) => {
        request(app)
            .get('/users')
            .end((err, res) => {
                if(err) throw err
                // console.log(res.body)
                res.body.should.be.instanceof(Array)
                res.body.forEach(user => {
                    user.should.have.property('name')
                })
                // done()는 mocha가 테스트를 종료했을때를 알려주기위한 
                done()
            })
    })
})