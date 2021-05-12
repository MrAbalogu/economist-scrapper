import Scrapper from '../../../services/scrapper'
import Post from '../../../models/Post'

export default async (req, res) => {
  const { method }  = req

  switch(method) {
    case "GET":
      try {
        const posts = Scrapper()

        console.log('scrapper', posts)

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
