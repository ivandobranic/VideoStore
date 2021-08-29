import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Language from 'App/Model/Language'

export default class LanguageSeeder extends BaseSeeder {
  public static developmentOnly = true
  public async run() {
    const uniqueKey = 'name'
    await Language.updateOrCreateMany(uniqueKey, [
      {
        name: 'English',
      },
      {
        name: 'Croatian',
      },
      {
        name: 'German',
      },
      {
        name: 'Spanish',
      },
      {
        name: 'French',
      },
    ])
  }
}
