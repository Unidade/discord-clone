import { Response, Request } from 'express'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

import User from '../../models/userModel'

export default async function postRegister(req: Request, res: Response) {
  try {
    const { username, email, password, birthday } = req.body

    const userData = {
      username: username.trim(),
      email: email.toLowerCase(),
      birthday,
    }
    // check if user data already exists in database
    const duplicateUserInfo = await User.find({
      $or: [{ username: userData.username }, { email: userData.email }],
    })

    console.log('duplicateUserInfo: ', duplicateUserInfo)
    if (duplicateUserInfo.length !== 0) {
      return res.status(409).send('Username or E-mail already in use')
    }

    // encrypt possword
    const encryptedPassword = await bcrypt.hash(password, 10)

    // create user document and save in database

    const user = await User.create({
      ...userData,
      password: encryptedPassword,
    })

    // create JWT token
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

    const userDetails = {
      email: user.email,
      username: user.username,
      token,
    }

    // response
    return res.status(201).json({
      ...userDetails,
    })
  } catch (err) {
    return res.status(500).send('Error occurred. Please try again')
  }
}
