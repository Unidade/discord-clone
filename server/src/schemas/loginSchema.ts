import Joi from 'joi'

export const loginSchema = Joi.object({
  password: Joi.string().required(),
  email: Joi.string().email().required(),
})
