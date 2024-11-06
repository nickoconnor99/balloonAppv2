import { Link, useLoaderData } from "react-router-dom"
import { createClient } from 'contentful'
import { useEffect, useState } from "react";
import { useFetchProducts } from '../utils/fetchProducts'
import data from '../data'



const ProductsGrid = () => {
    const products = data;

    return (

        <div className='pt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3 '>
            {products.map((prod) => {
                const { title, image } = prod;
                return (
                    <Link
                        to={`/products`}
                        className='card w-full  shadow-xl hover:shadow-2xl transition duration-300 '
                    >
                        <figure className='px-4 pt-4'>
                            <img
                                src={image}
                                alt='Elf'
                                className='rounded-xl h-64 md:h-48 w-full object-cover'
                            />
                        </figure>
                        <div className='card-body items-center text-center'>
                            <h2 className='card-title capitalize tracking-wider'>{title}</h2>

                        </div>
                    </Link>
                )
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
