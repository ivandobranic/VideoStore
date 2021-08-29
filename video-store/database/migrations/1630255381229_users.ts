import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Users extends BaseSchema {
  protected tableName = 'user'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.uuid('id').notNullable()
      table.string('email').notNullable().unique()
      table.string('firstName').notNullable()
      table.string('lastName').notNullable()
      table.timestamp('dateCreated', { useTz: true })
      table.timestamp('dateUpdated', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
