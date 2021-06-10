import styles from '../styles/Home.module.css'

export default function Post(props) {
  const { title, url, headline } = props

  return (
    <a href={url} className={styles.card} target="_blank">
      <h2>{headline} &rarr;</h2>
      <p>{title}.</p>
    </a>
  )
}
