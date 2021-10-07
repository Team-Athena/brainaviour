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
            A behavior prediction model, trained using task-based states such as movie watching 
            with BOLD (Blood Oxygen Level Dependent) time series data. 
          </p>
          <div>
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
