import axios from "axios";

export class CarService {
    async getAll() {
        const response = await axios.get('http://localhost:4200/cars')

        return response.data
    }
}