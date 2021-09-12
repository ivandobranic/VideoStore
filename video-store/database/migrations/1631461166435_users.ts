import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Users extends BaseSchema {
  protected tableName = 'user'

  public async up() {
    this.schema.alterTable(this.tableName, (table) => {
      table.string('password').notNullable()
    })
  }

  public async down() {
    this.schema.alterTable(this.tableName, (table) => {
      table.dropColumns('password')
    })
  }
}
