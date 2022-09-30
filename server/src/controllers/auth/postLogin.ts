import { Response, Request } from 'express'
import User from '../../models/userModel'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

export default async function postLogin(req: Request, res: Response) {
  try {
    const { email, password } = req.body

    const userData = {
      email: email.toLowerCase(),
    }

    const user = await User.findOne({ email: userData.email })

    if (user && (await bcrypt.compare(password, user.password))) {
      // send new token
      const token = jwt.sign(
        {
          userId: user._id,
          email: userData.email,
        },
        process.env.TOKEN_KEY,
        {
          expiresIn: '24h',
        }
      )

      return res.status(200).json({
        userDetails: {
          email: user.email,
          username: user.username,
          token,
        },
      })
    } else {
      return res.status(400).send('Invalid credentials. Please try again')
    }
  } catch (err) {
    return res.status(500).send('Something went wrong. Please try again')
  }
}
