import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import VideoCategory from 'App/Model/VideoCategory'

export default class VideoCategorySeeder extends BaseSeeder {
  public static developmentOnly = true
  public async run() {
    const uniqueKey = 'name'
    await VideoCategory.updateOrCreateMany(uniqueKey, [
      {
        name: 'Movie',
      },
      {
        name: 'TV Show',
      },
      {
        name: 'Documentary',
      },
    ])
  }
}
