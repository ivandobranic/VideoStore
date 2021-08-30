import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class VideoCategories extends BaseSchema {
  protected tableName = 'VideoCategory'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.uuid('id').primary().notNullable()
      table.string('name').notNullable()
      table.timestamp('dateCreated', { useTz: true })
      table.timestamp('dateUpdated', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
