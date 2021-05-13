import dbConnect from '../../../utils/dbConnect'
import { signUp } from '../../../controllers/AuthController'
import User from '../../../models/User'

dbConnect()

export default async (req, res) => {
  const { method }  = req

  switch(method) {
    case "POST":
      try {
        const user = await signUp(req.body)

        res.status(201).json({ success: true, data: user })
      } catch(error) {
        res.status(400).json({ success: false, error })
      }
      break
    default:
      res.status(400).json({ success: false })
      break
  }
}
