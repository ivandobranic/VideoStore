import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class VideoInfos extends BaseSchema {
  protected tableName = 'videoInfo'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.uuid('id').primary().notNullable()
      table.string('rating').nullable()
      table.string('genreId').notNullable()
      table.string('format').notNullable()
      table.time('duration').notNullable()
      table.date('dateReleased').notNullable()
      table.timestamp('dateCreated', { useTz: true })
      table.timestamp('dateUpdated', { useTz: true })

      table.foreign('id').references('video.id')
      table.foreign('genreId').references('genre.id')
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
