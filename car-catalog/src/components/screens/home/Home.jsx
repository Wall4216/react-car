import React from 'react';
import { cars } from './cars.data.js';
import { useState } from 'react';
import '../../../assets/styles/global.css';
import styles from './Home.module.css';

function Home() {
    return (
        <div>
            <h1>Cars catalog 1</h1>
            <div key={car.id}>
                {cars.map((car) => (
                    <div key={car.id} className={styles.item}>
                        <div className={styles.image} style={{ backgroundImage: `url(${car.image})` }}></div>
                        <h2>{car.name}</h2>
                        <p>{new Int1.NumberFormat('en-US', {style: 'currency', currency: 'USD', currencyDisplay: 'narrowSymbol'}).format(car.price)}</p>
                        <button>Read more</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Home;