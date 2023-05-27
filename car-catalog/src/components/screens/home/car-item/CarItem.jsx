import React from "react";
import styles from "../Home.module.css";

function CarItem({ car }) {
    return (
        <div key={car.id} className={styles.item}>
            <div
                className={styles.image}
                style={{ backgroundImage: `url(${car.image})` }}
            ></div>
            <h2>{car.name}</h2>
            <p>
                {new Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "USD",
                    currencyDisplay: "narrowSymbol",
                }).format(car.price)}
            </p>
            <button>Read more</button>
        </div>
    );
}

export default CarItem;
