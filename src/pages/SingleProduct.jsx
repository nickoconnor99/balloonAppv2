import { Link } from 'react-router-dom'
import elf from '../assets/397492507_267421149586508_6988846565487064728_n.jpg'

const SingleProduct = () => {
    return (
        <div className='pt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3 '>
            <Link
                key='123'
                to={`/products/`}
                className='card w-full  shadow-xl hover:shadow-2xl transition duration-300 '
            >
                <figure className='px-4 pt-4'>
                    <img
                        src={elf}
                        alt='vuv'
                        className='rounded-xl h-64 md:h-48 w-full object-cover'
                    />
                </figure>
                <div className='card-body items-center text-center'>
                    <h2 className='card-title capitalize tracking-wider'></h2>

                </div>
            </Link>



        </div>

    )
}

export default SingleProduct




//console.log(product)
//const fields = products.data.includes.Asset
// const img = image.fields
//const img = fields[0].fields.file.url


// const { products } = useLoaderData();
// const { image, title, price, description, colors, company } = products.attributes;
// const [productColor, setProductColor] = useState(colors[0]);
// const [amount, setAmount] = useState(1);

// const hadleAmount = (e) => {
//     setAmount(parseInt(e.target.value))
// }
// return (
//     <div className='pt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3 '>
//         {product.map((prod) => {
//             const { img, title, id } = prod;
//             //console.log(img, title)
//             return (
//                 <Link
//                     key={id}
//                     to={`/products/${id}`}
//                     className='card w-full  shadow-xl hover:shadow-2xl transition duration-300 '
//                 >
//                     <figure className='px-4 pt-4'>
//                         <img
//                             src={img}
//                             alt={title}
//                             className='rounded-xl h-64 md:h-48 w-full object-cover'
//                         />
//                     </figure>
//                     <div className='card-body items-center text-center'>
//                         <h2 className='card-title capitalize tracking-wider'>{title}</h2>

//                     </div>
//                 </Link>

//             );

//         })}
//     </div>

// )


// return (
//     <div className='grid lg:grid-cols-2'>
//         <figure className='px-4 pt-4 w-full card'>
//             <img
//                 src={image}
//                 alt={title}
//                 className='rounded-xl h-64 md:h-48 w-full object-cover'
//             />
//         </figure>
//         <div className='card-body items-center text-center'>
//             <h2 className='card-title capitalize tracking-wider'>{title}</h2>
//             <span>{company}</span>
//             <span className='text-secondary'>${price / 100}</span>
//             <p>{description}</p>
//         </div>
//         <div className='mt-6'>
//             <h4 className='text-md font-medium tracking-wider capitalize'>
//                 colors
//             </h4>
//             <div className='mt-2'>
//                 {colors.map((color) => {
//                     return (
//                         <button
//                             key={color}
//                             type='button'
//                             className={`badge w-6 h-6 mr-2 ${color === productColor && 'border-2 border-secondary'
//                                 }`}
//                             style={{ backgroundColor: color }}
//                             onClick={() => setProductColor(color)}
//                         ></button>
//                     );
//                 })}
//             </div>
//         </div>
//         <div className='form-control w-full max-w-xs'>
//             <label className='label'>
//                 <h4 className='text-md font-medium tracking-wider capitalize'>
//                     amount
//                 </h4>
//             </label>
//             <select
//                 className='select select-secondary select-bordered select-md'
//                 value={amount}
//                 onChange={hadleAmount}
//             >
//                 {generateAmount(20)}
//             </select>
//         </div>
//         {/* CART BUTTON */}
//         <div className='mt-10 '>
//             <button
//                 className='btn btn-secondary btn-md'
//                 onClick={() => console.log('add to bag')}
//             >
//                 Add to bag
//             </button>
//         </div>

//     </div>
// )

// const [product, setProduct] = useState([]);

// const getData = async () => {
//     const res = await client.getEntries({ content_type: 'products' });
//     const product = res.items.map((item) => {
//         const { image, title } = item.fields;
//         const id = item.sys.id;
//         const img = image?.fields?.file?.url;
//         return { img, title, id }
//     });
//     setProduct(product)
//     // console.log(product)
// }
// useEffect(() => {
//     getData()
// }, [])
// return { product }
// };

// const getData2 = async () => {
//     await client.getEntry('EEZDQsjqlxfJhKTlC622p', { include: 1 }).then((entry) => {
//         const { image, title } = entry.fields;
//         //console.log(title, image)
//         const id = entry.sys.id;
//         // console.log(id)
//         const img = entry?.fields?.file;
//         setTitle(title)
//         setImage(img)
//         setId(id)
//         console.log(title, id, img)

//     })
// }
// getData2()
// console.log(title)