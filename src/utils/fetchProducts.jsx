import { createClient } from "contentful";
import { useState, useEffect } from "react";

const client = createClient({
    accessToken: 's4HlIPhwB7x2gfGxt-CgVQ0mQvnN4RkQvXB2xEu8l28',
    space: 'zpu537igy6hd',
})

export const useFetchProducts = () => {
    const [product, setProduct] = useState([]);

     const getData = async () => {
        const res = await client.getEntries({ content_type: 'products' });
        const product = res.items.map((item) => {
            const { image, title } = item.fields;
            const id = item.sys.id;
            const img = image?.fields?.file?.url;
            return { img, title, id }
        });
        setProduct(product)
        // console.log(product)
    }
    useEffect(() => {
        getData()
    }, [])
    return { product }
};

//Directus
 //const { products } = useLoaderData();
    // const data = products.data
    // console.log(products)


    // const directusApi = 'https://comfy-store.directus.app/items/products/';
    // const fileId = image;
    // const accessToken = 'your-access-token';

    // const imageUrl = `${directusApi}/assets/${fileId}?access_token=${accessToken}`;
    // console.log(imageUrl);


    // export const useFetchProducts = () => {
    //     const [product, setProduct] = useState([]);
    
    //      const getData = async () => {
    //         const res = await client.getEntries({ content_type: 'products' });
    //         const product = res.items.map((item) => {
    //             const { image, title } = item.fields;
    //             const id = item.sys.id;
    //             const img = image?.fields?.file?.url;
    //             return { img, title, id }
    //         });
    //         setProduct(product)
    //         // console.log(product)
    //     }
    //     useEffect(() => {
    //         getData()
    //     }, [])
    //     return { product }
    // };
