import React, {useState, useEffect} from "react";
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import ItemDetail from "../ItemDetail";
import { useParams } from 'react-router-dom';

// 1- Traer el servicio de firestor
// 2- Crear un puntero al dato que queremos traer
// 3- Traer el dato con una promesa

/*const  films = [ ESTO SE PUEDE BORRAR, YA ESTA CARGADO EN LA BASE DE DATOS
    {id: 1, price: 500, image: "https://phantom-marca.unidadeditorial.es/89c0ba9d49e637862f7e984c08635244/resize/660/f/webp/assets/multimedia/imagenes/2022/07/07/16572060638517.jpg", category: 'anime', title: "Berserk"},
    {id: 2, price: 300, image: "https://i.ytimg.com/vi/wedkXHEpZUg/maxresdefault.jpg", category: 'anime', title: "Goblin Slayer"},
    {id: 3, price: 400, image: "https://wallpaper-mania.com/wp-content/uploads/2018/09/High_resolution_wallpaper_background_ID_77700115304.jpg", category: 'anime', title: "Hellsing"},
    {id: 4, price: 350, image: "https://images.alphacoders.com/907/90731.jpg", category: 'juegos', title: "Warrior Within"},
    {id: 5, price: 250, image: "https://i.pinimg.com/originals/d5/89/66/d589664ef597a8cd79dec9c555e5d8f3.jpg", category: 'juegos', title: "Hellblade"},
    {id: 6, price: 450, image: "https://wallpaperaccess.com/full/251372.jpg", category: 'juegos', title: "Halo"},
];*/

export const ItemDetailContainer = () => {
    const [data, setData] = useState({});
    const { detalleId } = useParams();

    useEffect(() => {
        const querydb = getFirestore();
        const queryDoc = doc(querydb, 'products', detalleId); //Donde esta el ID despues lo reemplazamos por detalleId
        getDoc(queryDoc)
            .then(res => setData({ id: res.id, ...res.data() }))
    }, [detalleId]);

    return (
        <ItemDetail data={data} />
    );
}

export default ItemDetailContainer;