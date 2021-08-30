import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Videos extends BaseSchema {
  protected tableName = 'Video'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.uuid('id').primary().notNullable()
      table.string('title').notNullable()
      table.string('trailer').notNullable()
      table.string('slug').notNullable().unique()
      table.uuid('languageId').nullable()
      table.uuid('videoCategoryId').notNullable()
      table.uuid('reservedByUserId').nullable()
      table.boolean('isReserved').notNullable().defaultTo(false)
      table.timestamp('reservedStartDate').nullable()
      table.timestamp('reservedEndDate').nullable()
      table.timestamp('dateCreated', { useTz: true })
      table.timestamp('dateUpdated', { useTz: true })

      table.foreign('languageId').references('language.id')
      table.foreign('videoCategoryId').references('videoCategory.id')
      table.foreign('reservedByUserId').references('user.id')
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
