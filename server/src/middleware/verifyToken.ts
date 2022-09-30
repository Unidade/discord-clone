import { NextFunction, Response, Request } from 'express'
import jwt from 'jsonwebtoken'

export default function verifyToken(
  req: Request,
  res: Response,
  next: NextFunction
) {
  let token = req.body.token || req.query.token || req.headers['authorization']

  if (!token)
    return res.status(403).send('A token is required for authentication')

  try {
    token = token.replace(/^Bearer\s+/, '')
    const decoded = jwt.verify(token, process.env.TOKEN_KEY)
    req.body.user = decoded
  } catch (err) {
    return res.status(401).send('Invalid Token')
  }
  next()
}
