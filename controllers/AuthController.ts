import { verify, sign } from 'jsonwebtoken'
import cookie from 'cookie'
import bcrypt from 'bcryptjs'
import Constants from '../utils/constants'
import User from '../models/User'
import { ValidationError } from '../utils/errors';

const secret = Constants.secret

const signIn = async (user, password, res) => {
  const passwordMatch = await bcrypt.compare(password, user.password)

  if(passwordMatch) {
    const claims = {
      id: user.id,
      email: user.email
    }
    const jwt = sign(claims, secret, { expiresIn: '1h' });

    res.setHeader('Set-Cookie', cookie.serialize('auth', jwt, {
      httpOnly: true,
      secure: process.env.NODE_ENV !== 'development',
      sameSite: 'strict',
      maxAge: 3600,
      path: '/'
    }))
  }

  return passwordMatch
}

const signUp = async (params) => {
  let user = await new User(params)

  await user.save((err) => {
    if(err)
      throw new ValidationError(err)
  })

  return user
}

const verifyCookie = async (cookie) => {
  if(!cookie) {
    return false
  }

  const verified = await verify(cookie, secret)

  return verified
}

module.exports = { verifyCookie, signUp, signIn }
