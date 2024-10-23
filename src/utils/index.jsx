import axios from "axios";


//const productionUrl = 'http://comfy-store.directus.app/items/';
//const productionUrl = 'http://localhost:8055/items';
const productionUrl = 'https://cdn.contentful.com/spaces/zpu537igy6hd/entries/'
const token = 's4HlIPhwB7x2gfGxt-CgVQ0mQvnN4RkQvXB2xEu8l28'

export const customFetch = axios.create({
    baseURL: productionUrl,
    headers: { Authorization: `Bearer ${token}` }


})

export const generateAmount = (number) => {
    return Array.from({ length: number }, (_, index) => {
        const amount = index + 1;
        return (
            <option key={amount} value={amount}>{amount}</option>
        )
    })
}

//const productionUrl = 'https://strapi-store-server.onrender.com/api';

