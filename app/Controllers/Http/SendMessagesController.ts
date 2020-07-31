import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import twilio from '@ioc:Services/Twilio'

export default class SendMessagesController {

  public async sendMessage({ request, response, logger }: HttpContextContract) {
    const { to, body } = request.post()

    try {
      const { success } = await twilio.sendSMS(to, body)

      response.status(200).send({ data: success, status: 'Success' })
    } catch (e) {
      logger.error('Failed to send sms', e)

      response.status(e.status).send(e)
    }
  }

}
