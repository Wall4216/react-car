import React from 'react';
import { useState } from 'react';
import '../../../assets/styles/global.css';
import styles from './Home.module.css';

function Home() {
    return (
        <div>
            <h1>Cars catalog 1</h1>
            <div>
                <div className={styles.item}>
                    <div className={styles.image} style={{ backgroundImage: 'url(/2.png)' }}></div>
                    <h2>Car 1</h2>
                    <p>$100 000</p>
                    <button>Read more</button>
                </div>
            </div>
        </div>
    );
}

export default Home;
