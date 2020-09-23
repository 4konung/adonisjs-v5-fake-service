import Route from '@ioc:Adonis/Core/Route'
import {HttpContextContract} from '@ioc:Adonis/Core/HttpContext'
import service from '@ioc:Services/SomeService'

Route.get('/closure', async ({response}: HttpContextContract) => {
  const result = service.doStuff()

  response.status(200).send({result})
})
