declare module '@ioc:Services/Twilio' {
  import TwilioClient from 'twilio/lib/rest/Twilio'

  export interface TwilioContract {
    client: TwilioClient
    sendSMS(to: string, body: string): Promise<{ success: any }>
  }

  export interface TwilioConfig {
    accountSid: string
    authToken: string
    phoneNumber: string
    options?: TwilioClient.TwilioClientOptions
  }

  const twilio: TwilioContract

  export default twilio
}
