import { useEffect, useState } from 'react';
import axios from 'axios'
import Router from 'next/router'
import Post from '@/components/Post'
import styles from '../styles/Home.module.css'

export default function Posts() {
  const [posts, setPosts] = useState([]),
        [fetched, setFetched] = useState(false),
        headline = "Post"

  function fetchPosts() {
    setFetched(false)
    axios.get('/api/posts/scrapper', {withCredentials: true})
      .then((response) => {
        setFetched(true)
        setPosts(response.data.data)
      })
      .catch((err) => {
        setFetched(true)
        console.error(err)

        if(err.request.status === 401) Router.push('/auth')
      })
  }

  useEffect(() => {
    fetchPosts()
    const id = setInterval(() => fetchPosts(), 60000)
    return () => {
      clearInterval(id)
    }
  }, [])

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Posts from Economist's Landingpage
        </h1>

        {!fetched && <p>Fetching Posts...</p>}

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
