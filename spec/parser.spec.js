var request = require('supertest')
    , api = request('http://localhost:8080')
    , data = require('./mock/data')
    ;

describe('POST /', function(){
    it('should get status 400 for invalid request', function(done){
        api
            .post('/')
            .send(data.invalidRequestBody)
            .expect(400, done)
        }
    );
/*
    it('should get error message for invalid request', function(done){
            api
                .post('/')
                .send(data.invalidRequestBody)
                .expect(data.invalidResponseBody, done)
        }
    );
*/
    it('should get status 200 for valid request', function(done){
            api
                .post('/')
                .send(data.validRequestBody)
                .expect(200, done)
        }
    );

    it('should get list of parsed data for valid request', function(done){
            api
                .post('/')
                .send(data.validRequestBody)
                .expect(data.validResponseBody, done)
        }
    );

    function hasInvalidRespose(res) {
        return JSON.parse(res.text) === '';
    }
});