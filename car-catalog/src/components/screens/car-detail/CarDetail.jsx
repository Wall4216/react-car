import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { CarService } from "../../../services/car.service.js";
import CarItem from "../home/car-item/CarItem.jsx";

const CarDetail = () => {
    const { id } = useParams(); // Получаем значение id из параметров маршрута
    const [car, setCar] = useState({});

    useEffect(() => {
        if (!id) return;

        const fetchData = async () => {
            const carService = new CarService();
            const data = await carService.getById(id);
            setCar(data);
        };

        fetchData();
    }, [id]);
if (!car?.name) return <p>Loading...</p>
    return <div><CarItem car={car}/></div>;
};

export default CarDetail;