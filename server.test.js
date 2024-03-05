const app = require('./server') // Link to your server file
const supertest = require('supertest')
const request = supertest(app)


it('Call the /home', async () => {
    try {
        const res = await request.get('/home')
        expect(res.status).toBe(200)
        expect(JSON.parse(res.text).message).toBe('Hello World !')
    } catch (error) {
        console.log(error);
    }
})