import Link from 'next/link'
import React from 'react'
import styles from '../../styles/Home.module.css'

interface NavCardsProps {}

const NavCards = (props: NavCardsProps) => {
  return (
    <div className={styles.grid}>
      <Link href="/sample1">
        <a className={styles.card}>
          <h2>Sample1Page &rarr;</h2>
          <p>Find in-depth information about Next.js features and API.</p>
        </a>
      </Link>
      <Link href="/">
        <a className={styles.card}>
          <h2>Home</h2>
          <p>Learn about Next.js in an interactive course with quizzes!</p>
        </a>
      </Link>

      <a
        href="https://github.com/vercel/next.js/tree/master/examples"
        className={styles.card}
      >
        <h2>Examples &rarr;</h2>
        <p>Discover and deploy boilerplate example Next.js projects.</p>
      </a>

      <a
        href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        className={styles.card}
      >
        <h2>Deploy &rarr;</h2>
        <p>Instantly deploy your Next.js site to a public URL with Vercel.</p>
      </a>
    </div>
  )
}
export default NavCards
