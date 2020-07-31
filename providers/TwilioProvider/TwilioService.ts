import Twilio from 'twilio'
import TwilioClient from 'twilio/lib/rest/Twilio'
import { TwilioConfig, TwilioContract } from '@ioc:Services/Twilio'

class TwilioService implements TwilioContract {
  public client: TwilioClient
  private readonly from: string

  constructor({ accountSid, authToken, phoneNumber, options }: TwilioConfig) {
    this.client = Twilio(accountSid, authToken, options)
    this.from = phoneNumber
  }

  public async sendSMS(to: string, body: string) {

    const success = await this.client.messages.create({
      to,
      body,
      from: this.from,
    })

    return { success }
  }
}

export default TwilioService
