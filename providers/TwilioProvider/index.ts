import { IocContract } from '@adonisjs/fold'

import TwilioService from './TwilioService'

export default class TwilioProvider {
  constructor(protected container: IocContract) {}

  public register() {
    // Register your own bindings
    this.container.singleton('Services/Twilio', () => {
      const config = this.container
        .use('Adonis/Core/Config')
        .get('services.twilio')

      return new TwilioService(config)
    })
  }
}
