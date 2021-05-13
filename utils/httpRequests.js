import axios from 'axios'
import Router from 'next/router'

async function httpGetRequest(url, context) {
  const res = await axios.get(url)

  if (res.status === 401 && !context.req) {
    Router.replace("/auth")
    return
  }

  if (res.status === 401 && context.req) {
    context.res?.writeHead(302, {
      Location: 'http://localhost:3000/auth'
    });
    context.res?.end()
    return
  }

  return res
}

export default httpGetRequest
