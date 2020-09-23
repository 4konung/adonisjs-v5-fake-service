import {IocContract} from '@adonisjs/fold'

import SomeService from './SomeService'

export default class SomeServiceProvider {
  constructor(protected container: IocContract) {
  }

  public register() {
    // Register your own bindings
    this.container.singleton('Services/SomeService', () => {

      return new SomeService()
    })
  }

}
