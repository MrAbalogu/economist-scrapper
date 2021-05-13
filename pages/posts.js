import { useEffect, useState } from 'react';
import httpGetRequest from '../utils/httpRequests'
import Post from '../components/Post'
import styles from '../styles/Home.module.css'

export default function Posts() {
  const [posts, setPosts] = useState([]),
        headline = "Post"

  function fetchPosts() {
    httpGetRequest('/api/posts/scrapper')
      .then((response) => {
        setPosts(response.data.data)
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
            posts.map((post) => (
              <Post
                headline={headline}
                title={post.title.substring(0,30)}
                url={post.url}
                key={post.id}
              ></Post>
            ))
          }
        </div>
      </main>
    </div>
  )
}
