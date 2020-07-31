import test from 'japa'
import supertest from 'supertest'
import Application from '@ioc:Adonis/Core/Application'

const BASE_URL = `http://${process.env.HOST}:${process.env.PORT}`

test('Try to fake Providers method', async (assert) => {
  const fakeResponse = 'fake response data'

  Application.container.fake('Services/Twilio', () => {
    return {
      sendSMS(to, body) {
        console.log(`You've make a fake send message request\nto: ${to}\nwith body: ${body}`)

        return { success: fakeResponse }
      }
    }
  })

  const { body } = await supertest(BASE_URL)
    .post('/api/send-message')
    .send({
      to: '+381234567890',
      body: 'Hello world!',
    })
    .expect(200)

  assert.equal(body.data, fakeResponse)
})
