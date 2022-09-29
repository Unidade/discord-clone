import { Response, Request } from 'express'
import User from '../../models/userModel'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

export default async function postLogin(req: Request, res: Response) {
  try {
    const { email, password } = req.body

    const user = await User.findOne({ email: email.toLowerCase() })

    if (user && (await bcrypt.compare(password, user.password))) {
      // send new token
      const token = 'JWT_TOKEN'

      return res.status(200).json({
        userDetails: {
          email: user.email,
          token,
          username: user.username,
        },
      })
    } else {
      return res.status(400).send('Invalid credentials. Please try again')
    }
  } catch (err) {
    return res.status(500).send('Something went wrong. Please try again')
  }
}
