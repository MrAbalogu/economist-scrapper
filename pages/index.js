import Head from 'next/head'
import Link from 'next/link'
import styles from 'styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Scrapper App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome
        </h1>

        <div className={styles.grid}>
          <Link href="/posts">
            <div className={styles.card}>
              <h2>Economist Scrapper &rarr;</h2>
              <p>View posts from Website.</p>
            </div>
          </Link>
        </div>
      </main>
    </div>
  )
}
