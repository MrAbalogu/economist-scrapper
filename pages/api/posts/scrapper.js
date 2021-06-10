import { dbConnect } from '../../../utils/dbConnect'
import Scrapper from '../../../services/scrapper'
import { parsePosts } from '../../../controllers/PostController'
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
          return
        }

        const postsFromScrapper = await Scrapper()
        const posts = await parsePosts(postsFromScrapper)

        res.status(200).json({ success: true, data: posts })
      } catch(error) {
        console.log('error', error)
        res.status(400).json({ success: false })
      }
      break
    default:
      res.status(400).json({ success: false })
      break
  }
}
