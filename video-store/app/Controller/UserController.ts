import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import UserService from 'App/Service/UserService'
import { schema, rules } from '@ioc:Adonis/Core/Validator'
export default class UserController {
  userService = new UserService()
  public async create({ request, response }: HttpContextContract) {
    const newUserSchema = schema.create({
      email: schema.string({}, [rules.email()]),
      password: schema.string({}, [rules.required()]),
      firstName: schema.string({ trim: true }),
      lastName: schema.string({ trim: true }),
    })
    const payload = await request.validate({
      schema: newUserSchema,
    })
    const user = this.userService.createUser(payload)
    response.status(201)
    return user
  }
}
