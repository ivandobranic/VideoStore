import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Genre from 'App/Model/Genre'

export default class GenderSeeder extends BaseSeeder {
  public static developmentOnly = true
  public async run() {
    const uniqueKey = 'name'
    await Genre.updateOrCreateMany(uniqueKey, [
      {
        name: 'Science Fiction',
      },
      {
        name: 'Thriller',
      },
      {
        name: 'Action',
      },
      {
        name: 'Drama',
      },
      {
        name: 'Horror',
      },
      {
        name: 'Comedy',
      },
    ])
  }
}
