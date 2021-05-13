import dbConnect from '../../../utils/dbConnect'
import Scrapper from '../../../services/scrapper'
import { parsePosts } from '../../../controllers/postsController'

dbConnect()

export default async (req, res) => {
  const { method }  = req

  switch(method) {
    case "GET":
      try {
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
