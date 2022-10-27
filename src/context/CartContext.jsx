import React, { useState, useContext } from "react";

const CartContext = React.createContext([]);

export const useCartContext = () => useContext(CartContext);

const CartProvider = ({ children }) => { //Logica para el carrito: 1.T o F si existe 2.Limpiar carrito 3.Remover 4.Agregar
    const [cart, setCart] = useState([]);
    
    const addProduct = (item, quantity) => {
        if (isInCart(item.id)) {
            setCart(cart.map(product => {
                return product.id === item.id ? { ...product, quantity: product.quantity + quantity } : product
            }));
        } else {
            setCart([...cart, { ...item, quantity }]);
        }
    }
    
    console.log('carrito: ', cart);

    const clearCart = () => setCart([]);
    
    const isInCart = (id) => cart.find(product => product.id === id) ? true : false;

    const removeProduct = (id) => setCart(cart.filter(product => product.id !== id));
    
    return (
        <CartContext.Provider  value={{
            clearCart,
            isInCart,
            removeProduct,
            addProduct
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider