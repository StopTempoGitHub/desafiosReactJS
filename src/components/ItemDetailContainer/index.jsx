import React, {useState, useEffect} from "react";

import ItemDetail from "../ItemDetail";
import { useParams } from 'react-router-dom';

const  films = [
    {id: 1, price: 500, image: "https://phantom-marca.unidadeditorial.es/89c0ba9d49e637862f7e984c08635244/resize/660/f/webp/assets/multimedia/imagenes/2022/07/07/16572060638517.jpg", category: 'anime', title: "Berserk"},
    {id: 2, price: 300, image: "https://i.ytimg.com/vi/wedkXHEpZUg/maxresdefault.jpg", category: 'anime', title: "Goblin Slayer"},
    {id: 3, price: 400, image: "https://wallpaper-mania.com/wp-content/uploads/2018/09/High_resolution_wallpaper_background_ID_77700115304.jpg", category: 'anime', title: "Hellsing"},
    {id: 4, price: 350, image: "https://images.alphacoders.com/907/90731.jpg", category: 'juegos', title: "Warrior Within"},
    {id: 5, price: 250, image: "https://i.pinimg.com/originals/d5/89/66/d589664ef597a8cd79dec9c555e5d8f3.jpg", category: 'juegos', title: "Hellblade"},
    {id: 6, price: 450, image: "https://wallpaperaccess.com/full/251372.jpg", category: 'juegos', title: "Halo"},
];

export const ItemDetailContainer = () => {
    const [data, setData] = useState({});
    const { detalleId } = useParams();

    useEffect(() => {
        const getData = new Promise(resolve => {
            setTimeout(() => {
                resolve(films);
            }, 500);
        });

        getData.then(res => setData(res.find(film => film.id === parseInt(detalleId))));
    }, [detalleId]);

    return (
        <ItemDetail data={data} />
    );
}

export default ItemDetailContainer;