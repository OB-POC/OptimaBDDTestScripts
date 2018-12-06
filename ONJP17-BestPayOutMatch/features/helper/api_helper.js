const supertest = require('supertest');

//get request
exports.sendGETRequest = async (baseUrl, apiEndPoint, token) => {
    try {
        let res = await supertest(baseUrl).get(apiEndPoint).retry(2)
            .set('Accept', 'application/json')
            .set('Content-Type', 'application/json')
            .set('x-access-token', token);
        return res;
    } catch (err) {
        console.log('Error in sending GET Request: ', err);
    }
};

//post request
exports.sendPOSTRequest = async (baseUrl, apiEndPoint, requestBody) => {
    try {
        let res = await supertest(baseUrl).post(apiEndPoint).retry(2)
            .set('Accept', 'application/json')
            .set('Content-Type', 'application/json')
            .send(requestBody);
        return res;
    } catch (err) {
        console.log('Error in sending POST Request: ', err);
    }
};