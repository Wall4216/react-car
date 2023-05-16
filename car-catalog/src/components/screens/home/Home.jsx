import { useState } from 'react'
import '../../../assets/styles/global.css'
import styles from './Home.module.css'
function Home() {
  return (
        <div>
            <h1>Cars catalog 1</h1>
        <div>
            <div className={styles.item}>
                <h2>Car 1</h2>
                <p>$100 000</p>
                <button>Read more</button>
            </div>
        </div>
        </div>

  )
}

export default Home
