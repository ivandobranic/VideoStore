import { ApplicationContract } from '@ioc:Adonis/Core/Application'
import CamelCaseNamingConfiguration from 'App/Dal/CamelCaseNamingConfiguration'

export default class AppProvider {
  constructor(protected app: ApplicationContract) {}

  public register() {
    // Register your own bindings
  }

  public async boot() {
    // IoC container is ready
  }

  public async ready() {
    const { BaseModel } = (await import('@ioc:Adonis/Lucid/Orm')).default
    BaseModel.namingStrategy = new CamelCaseNamingConfiguration()
  }

  public async shutdown() {
    // Cleanup, since app is going down
  }
}
