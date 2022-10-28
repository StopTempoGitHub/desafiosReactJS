import './itemCount.css';

import React,{useEffect, useState} from 'react';

export const ItemCount = ({initial, stock, onAdd}) => {
    const [count, setCount]  = useState(parseInt(initial));

    const decrease = () => {
        setCount(count - 1);
    }

    const increase = () => {
        setCount(count + 1);
    }

    useEffect(() => {
        setCount(parseInt(initial));
    }, [initial])

    return (
        <div className='mt-5'>
            <button disabled={count <= 1} onClick={decrease} className="mr-2 bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">-</button>
            <span>{count}</span>
            <button disabled={count >= stock} onClick={increase} className="ml-2 bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">+</button>
            <div>
                <button disabled={stock <=0} onClick={() => onAdd(count)} className="mt-2 bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">Agregar al carrito</button>
            </div>
        </div>
    );
}

export default ItemCount;