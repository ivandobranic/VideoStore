import { column, BaseModel, beforeCreate } from '@ioc:Adonis/Lucid/Orm'
import { v4 as uuidv4 } from 'uuid'
import { DateTime } from 'luxon'

export default class Video extends BaseModel {
  public static selfAssignPrimaryKey = true

  @column({ isPrimary: true })
  public id: string

  @column()
  public title: string

  @column()
  public trailer: string

  @column()
  public slug: string

  @column()
  public languageId: string

  @column()
  public videoCategoryId: string

  @column()
  public reservedByUserId: string

  @column()
  public isReserved: boolean

  @column()
  public reservedStartDate: DateTime

  @column()
  public reservedEndDate: DateTime

  @column.dateTime({ autoCreate: true })
  public dateCreated: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public dateUpdated: DateTime

  @beforeCreate()
  public static assignUuid(video: Video) {
    video.id = uuidv4()
  }
  public static createSLug(video: Video) {
    if (video.$dirty.title) {
      video.slug = video.title
        .toLowerCase()
        .replace(/ /g, '-')
        .replace(/[^\w-]+/g, '')
    }
  }
}
