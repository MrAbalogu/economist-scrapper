import { dbConnect } from '../../../utils/dbConnect'
import Post from '../../../models/Post'
import { verifyCookie } from '../../../controllers/AuthController'

dbConnect()

export default async (req, res) => {
  const { method }  = req

  switch(method) {
    case "GET":
      try {
        const authenticated = await verifyCookie(req.cookies.auth)

        if(!authenticated) {
          res.status(401).json({ success: false, error: 'You are not authenticated' })
        }

        const posts = await Post.find({})

        res.status(200).json({ success: true, data: posts })
      } catch(error) {
        res.status(400).json({ success: false })
      }
      break
    case "POST":
      try {
        const post = await Post.create(req.body) 

        res.status(201).json({ success: true, data: post })
      } catch(error) {
        res.status(400).json({ success: false })
      }
      break
    default:
      res.status(400).json({ success: false })
      break
  }
}
