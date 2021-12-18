import Link from 'next/link'
import React from 'react'
import styles from '../../styles/Home.module.css'

interface LayoutProps {
  children: React.ReactChild
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <div
        style={{
          display: 'flex',
          gap: 20,
          paddingLeft: 20,
          paddingRight: 20,
          paddingTop: 10,
          paddingBottom: 10,
        }}
      >
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/sample1">
          <a>Sample Page1</a>
        </Link>
      </div>
      <div className={styles.container}>
        <main className={styles.main}>{children}</main>
      </div>
    </>
  )
}
export default Layout
