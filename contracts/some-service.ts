declare module '@ioc:Services/SomeService' {
  export interface SomeServiceContract {
    doStuff(): string
  }

  const service: SomeServiceContract

  export default service
}
