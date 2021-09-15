import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Genres extends BaseSchema {
  protected tableName = 'genre'

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
