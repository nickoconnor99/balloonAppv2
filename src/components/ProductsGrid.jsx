import { Link, useLoaderData } from "react-router-dom"
import { createClient } from 'contentful'
import { useEffect, useState } from "react";


const ProductsGrid = () => {
    let imageURL;

    const client = createClient({
        accessToken: 's4HlIPhwB7x2gfGxt-CgVQ0mQvnN4RkQvXB2xEu8l28',
        space: 'zpu537igy6hd',
    })
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

    // client.getEntries().then(function (entries) {
    //     entries.items.forEach(function (entry) {
    //         //console.log(entry)
    //         imageURL = 'http://' + entry.fields.image.fields.file.url
    //         console.log(imageURL)
    //     }
    //     )
    // })
    // getting a specific Post
    // client
    //     .getEntries({ 'sys.id': '10jOjKpdTYAYRVc197KlAs' })
    //     .then((response) => {
    //         console.log(response)
    //     }).catch((err) => console.log(err))


    const { products } = useLoaderData();
    // const data = products.data
    // console.log(products)


    // const directusApi = 'https://comfy-store.directus.app/items/products/';
    // const fileId = image;
    // const accessToken = 'your-access-token';

    // const imageUrl = `${directusApi}/assets/${fileId}?access_token=${accessToken}`;
    // console.log(imageUrl);

    return (
        <div className='pt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3 '>
            {product.map((prod) => {
                const { img, title, id } = prod;
                console.log(img, title)
                return (
                    <Link
                        key={id}
                        to={`/products/${id}`}
                        className='card w-full  shadow-xl hover:shadow-2xl transition duration-300 '
                    >
                        <figure className='px-4 pt-4'>
                            <img
                                src={img}
                                alt={title}
                                className='rounded-xl h-64 md:h-48 w-full object-cover'
                            />
                        </figure>
                        <div className='card-body items-center text-center'>
                            <h2 className='card-title capitalize tracking-wider'>{title}</h2>

                        </div>
                    </Link>

                );

            })}
        </div>

    )
}











//         <div className='pt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3 '>
//             {products.map((product) => {
//                 const { title, description } = product.fields;
//                 return (
//                     <Link
//                         key={product.title}
//                         to={`/products/${product.id}`}
//                         className='card w-full  shadow-xl hover:shadow-2xl transition duration-300 '
//                     >
//                         <figure className='px-4 pt-4'>
//                             <img
//                                 src={title}
//                                 alt={title}
//                                 className='rounded-xl h-64 md:h-48 w-full object-cover'
//                             />
//                         </figure>
//                         <div className='card-body items-center text-center'>
//                             <h2 className='card-title capitalize tracking-wider'>{title}</h2>

//                         </div>
//                     </Link>

//                 );
//             })}
//         </div>
//     );
// };
export default ProductsGrid;

// <div className='pt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3 '>
//             {products.map((product) => {
//                 const { title, price, image } = product.attributes;
//                 const dollarsAmount = price;
//                 return (
//                     <Link
//                         key={product.id}
//                         to={`/products/${product.id}`}
//                         className='card w-full  shadow-xl hover:shadow-2xl transition duration-300 '
//                     >
//                         <figure className='px-4 pt-4'>
//                             <img
//                                 src={image}
//                                 alt={title}
//                                 className='rounded-xl h-64 md:h-48 w-full object-cover'
//                             />
//                         </figure>
//                         <div className='card-body items-center text-center'>
//                             <h2 className='card-title capitalize tracking-wider'>{title}</h2>
//                             <span className='text-secondary'>${dollarsAmount / 100}</span>
//                         </div>
//                     </Link>
//                 );
//             })}
//         </div>

// {data.map((product) => {
//     const { Title, Description, Image, Price } = product;
