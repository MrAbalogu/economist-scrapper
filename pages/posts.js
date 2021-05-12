import { useEffect } from 'react';
import httpGetRequest from '../utils/httpRequests'
import Post from '../components/Post'
import styles from '../styles/Home.module.css'

export default function Posts() {
  const headline = "Latest News",
        title =  "My dummy title about trading crypto..",
        loop = [1,2,3,4,5,6,7,8,9,10],
        url = "https://nextjs.org/docs"

  function fetchPosts() {
    httpGetRequest('/api/posts/scrapper')
      .then(() => {
        console.log('fetched from api...')
      })
      .catch((err) => {
        console.error(err)
      })
  }

  useEffect(() => {
    fetchPosts()
  });

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Posts from Economist's Landingpage
        </h1>

        <div className={styles.grid}>
          {
            loop.map((i) => (
              <Post
                headline={headline}
                title={title}
                url={url}
                key={i}
              ></Post>
            ))
          }
        </div>
      </main>
    </div>
  )
}
