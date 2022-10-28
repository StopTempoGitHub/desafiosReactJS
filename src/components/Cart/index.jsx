import { addDoc, collection, getFirestore } from 'firebase/firestore';
import React from "react";
import { Link } from 'react-router-dom'
import { useCartContext } from "../../context/CartContext";
import ItemCart from "../ItemCart";

const Cart = () => {
    const { cart, totalPrice } = useCartContext();

    const order = {
        buyer: {
            name: 'Fer',
            email: 'ferdi@gmail.com',
            phone: '1512312232',
            address: 'Maipu 1224, CABA'
        },
        items: cart.map(product => ({ id: product.id, title: product.title, price: product.price, quantity: product.quantity })),
        total: totalPrice(),
    }

    const handleClick = () => {
        const db = getFirestore();
        const ordersCollection = collection(db, 'orders');
        addDoc(ordersCollection, order)
            .then(({ id }) => console.log(id))
        alert("¡Usted a emitido una orden de Compra!")
    }

    if (cart.length === 0) {
        return (
            <>
                <p className="m-5">No hay elementos en el carrito.</p>
                <Link to='/' className="ml-5 bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">Hacer compras</Link>
            </>
        );
    }

    return (
        <>
            {
                cart.map(product => <ItemCart key={product.id} product={product} />)
            }
            <div className="flex flex-col items-center mt-10">
                <p>
                    total: ${totalPrice()}
                </p>
                <button onClick={handleClick} className="mt-2 mb-20 bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">Emitir Compra</button>
            </div>
        </>
    )
}

export default Cart;