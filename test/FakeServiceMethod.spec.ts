import test from 'japa'
import supertest from 'supertest'
import Application from '@ioc:Adonis/Core/Application'
import Database from '@ioc:Adonis/Lucid/Database'

const BASE_URL = `http://${process.env.HOST}:${process.env.PORT}`

test.group('Fake service method', async (group) => {
  Application.container.useProxies()

  const serviceName = 'Services/SomeService'
  const fakeResponse = 'fake response data'

  group.beforeEach(async () => {
    await Database.connection().truncate('users', true)
  })

  test('Try to fake in the controller', async (assert) => {
    Application.container.fake(serviceName, () => {
      return {
        doStuff() {
          console.log('fakes service call')

          return fakeResponse
        }
      }
    })

    const url = '/controller'

    const {body} = await supertest(BASE_URL)
      .get(url)
      .expect(200)
    assert.equal(body.result, fakeResponse)

    Application.container.restore(serviceName)
  })

  test('Try to fake in the closure', async (assert) => {
    Application.container.fake(serviceName, () => {
      return {
        doStuff() {
          console.log('fakes service call')

          return fakeResponse
        }
      }
    })

    const url = '/closure'

    const {body} = await supertest(BASE_URL)
      .get(url)
      .expect(200)
    assert.equal(body.result, fakeResponse)

    Application.container.restore(serviceName)
  })

  test('Try to fake in the controller with model usage', async () => {
    console.log(Application.container)

    Application.container.fake(serviceName, () => {
      return {
        doStuff() {
          console.log('fakes service call')

          return fakeResponse
        }
      }
    })

    const url = '/model'

    await supertest(BASE_URL)
      .get(url)
      .expect(200)

    Application.container.restore(serviceName)
  })
})
