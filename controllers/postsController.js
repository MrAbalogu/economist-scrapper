import Post from '../models/Post'
import Constants from '../utils/constants'

const siteUrl = Constants.baseUrl

const parsePosts = async (postsToParse) => {
  await postsToParse.forEach( async (post) => {
    let postToParse = {
      url: null,
      title: null
    }

    postToParse.url = siteUrl + post.url.match(/href="([^"]*)/)[1]
    postToParse.title = post.title

    try {
      await Post.create(postToParse)
    }
    catch(err) {
      console.error('create error', err)
    }
  })

  const Posts = await Post.find({})

  return Posts
}

module.exports = { parsePosts }
