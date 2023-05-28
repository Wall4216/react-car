import React, {useEffect, useMemo} from 'react';
import { cars as carsData} from './cars.data.js';
import { useState } from 'react';
import '../../../assets/styles/global.css';
import styles from './Home.module.css';
import CarItem from "./car-item/CarItem";
import CreateCarForm from "./create-car-form/CreateCarForm.jsx";
import axios from "axios";
import { CarService } from '../../../services/car.service.js';
import {useNavigate} from "react-router-dom";
function Home() {
    const [cars, setCars] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const carService = new CarService();
            const data = await carService.getAll();

            setCars(data);
        };

        fetchData();
    }, []);
    const nav = useNavigate()
    return (
        <div>
            <h1>Cars catalog</h1>
            <button onClick={() => nav('/car/1')}>go</button>
            <CreateCarForm setCars={setCars}></CreateCarForm>
            <div>
                {cars.length ? (
                    cars.map((car) => <CarItem key={car.id} car={car}></CarItem>)
                ) : (
                    <p>There are no cars</p>
                )}
            </div>
        </div>
    );
}

export default Home;