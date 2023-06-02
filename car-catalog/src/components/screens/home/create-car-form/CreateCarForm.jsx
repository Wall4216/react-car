import styles from './CreateCarForm.module.css';
import {useEffect, useState} from 'react';
import {useForm} from "react-hook-form";

const clearData = {
    price: '',
    name: '',
    image: ''
}
const CreateCarForm = ({ setCars }) => {
    const [data, setData] = useState(clearData);

    const {register, reset, handleSubmit} = useForm({
        mode: 'onChange'
    })

    const createCar = data    => {
        e.preventDefault();
        console.log(data);
        setCars(prev => [...prev, { id: prev.length + 1, ...data }]);
        setData(clearData);
    };

    return (
        <form className={styles.form} onSubmit={handleSubmit(createCar)}>
            <input
                placeholder='Name'
                onChange={e =>
                    setData(prev => ({ ...prev, name: e.target.value }))
                }
                value={data.name}
            />
            <input
                placeholder='Price'
                onChange={e =>
                    setData(prev => ({ ...prev, price: e.target.value }))
                }
                value={data.price}
            />
            <input
                placeholder='Image'
            />

            <button className='btn'>
                Create
            </button>
        </form>
    );
};

export default CreateCarForm;
