// import puppeteer from 'puppeteer'
import chromium from 'chrome-aws-lambda';
import constants from '../utils/constants'

async function Scrapper(url = constants.baseUrl) {
  let posts = [],
      fetchedPosts = []

  const browser = await chromium.puppeteer.launch({
    args: [...chromium.args, "--hide-scrollbars", "--disable-web-security"],
    defaultViewport: chromium.defaultViewport,
    executablePath: await chromium.executablePath,
    headless: false,
    ignoreHTTPSErrors: true,
  })
  const page = await browser.newPage()
  await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/61.0.3163.100 Safari/537.36')
  await page.goto(url, {waitUntil: 'domcontentloaded'})
  
  fetchedPosts = await page.evaluate(() => {
    try {
      let htmlPosts = [],
      pagePosts = []
  
      document.querySelectorAll('h3').forEach((el) => {
        htmlPosts.push(el)
      })

      htmlPosts.forEach((el) => {
        let post = {}

        post.title = el.innerText
        post.url = el.innerHTML

        pagePosts.push(post)
      })
  
      return pagePosts
    }
    catch(error) {
      console.error('error', error)
    }
  })

  return fetchedPosts
}

export default Scrapper
