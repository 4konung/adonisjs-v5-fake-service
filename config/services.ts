import Env from '@ioc:Adonis/Core/Env'
import { TwilioConfig } from '@ioc:Services/Twilio'

interface ServicesConfig {
  twilio: TwilioConfig
}

const servicesConfig: ServicesConfig = {
  twilio: {
    accountSid: Env.get('TWILIO_ACCOUNT_SID', 'AC4e9aa8ef809a6553e3b6d847d011b5fa') as string,
    authToken: Env.get('TWILIO_AUTH_TOKEN', 'd96514b9021cabb00b60eec8a0207e7d') as string,
    phoneNumber: Env.get('TWILIO_PHONE_NUM', '+15005550006') as string,
    options: {
      lazyLoading: true,
    },
  },
}

export default servicesConfig
