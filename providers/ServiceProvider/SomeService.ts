import {SomeServiceContract} from '@ioc:Services/SomeService'

class SomeService implements SomeServiceContract {
  public doStuff(): string {

    return 'real service call'
  }
}

export default SomeService
