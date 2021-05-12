import puppeteer from 'puppeteer'
import constants from '../utils/constants'

const scrapePosts = async (page) => {
  try {
    await page.evaluate( async () => {
      let htmlPosts = [],
          posts = []

      document.querySelectorAll('h3').forEach((el) => {
        htmlPosts.push(el)
      })

      htmlPosts.forEach((el) => {
        let post = {}
        const url = window.location.href.slice(0, -1)

        post.title = el.innerText
        post.url = url + el.innerHTML.match(/href="([^"]*)/)[1]

        posts.push(post)
      })

      console.log('whats happening?.. chromium', posts)

      return Promise.resolve(posts)
    })
  }
  catch(err) {
    console.log('error', err)
  }
}

async function Scrapper(url = constants.baseUrl) {
  let res
  let posts = []

  const browser = await puppeteer.launch({ headless: false })
  const page = await browser.newPage()
  await page.goto(url, {waitUntil: 'domcontentloaded'})

  posts = await scrapePosts(page)

  return posts
}

export default Scrapper
