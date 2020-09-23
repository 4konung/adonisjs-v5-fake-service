import {HttpContextContract} from '@ioc:Adonis/Core/HttpContext'
import service from '@ioc:Services/SomeService'
import User from 'App/Models/User'

export default class SimpleController {

  public async handleRequest({response}: HttpContextContract) {

    const result = service.doStuff()

    response.status(200).send({result})
  }

  public async withModelUsage({response}: HttpContextContract) {
      const user = await User.create({ name: 'John' })
      await user.save()

      response.status(200).send({result:  user})
  }
}
