import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>

      <div className={styles.mainContainer}>
        <div className={styles.mainContent}>
          <h1 className={styles.mainTitle}>Brainaviour</h1>
          <p className={styles.mainText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi 
          ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
          in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
          </p>
          <div>
            <button className={styles.mainButton}>
              <Link href="/explore">
                Test sample dataset
              </Link>
            </button>
            <button className={styles.mainButton}>
              <Link href="/explore">
                Upload dataset
              </Link>
            </button>
          </div>
        </div>

        <div className={styles.mainContent} styles={{backgroundColor: 'red'}}>
          <Image src="/brain.png"
          alt="test"
          width="600"
          height="620"
          layout="fixed" />
        </div>
      </div>
    </div>
  )
}
