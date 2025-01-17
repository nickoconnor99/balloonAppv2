import Hero from "./Hero"

import { customFetch } from "../utils";
import { FeaturedProducts } from "../components";

//const url = '/Products';
const ur = '/'

export const loader = async () => {
    const response = await customFetch(url);
    const products = response.data;
    console.log(response)
    return { response };
}

// export const loader = async () => {
//     const response = await customFetch(url);
//     const products = response.data;
//     console.log(products)
//     return { products };
// }
const Landing = () => {
    return (
        <div>
            <Hero></Hero>
            <FeaturedProducts></FeaturedProducts>
        </div>
    )
}

export default Landing

// import Hero from "./Hero"

// import { customFetch } from "../utils";
// import { FeaturedProducts } from "../components";

// const url = '/products?featured=true';

// export const loader = async () => {
//     const response = await customFetch(url);
//     const products = response.data.data;
//     return { products };
// }
// const Landing = () => {
//     return (
//         <div>
//             <Hero></Hero>
//             <FeaturedProducts></FeaturedProducts>
//         </div>
//     )
// }

// export default Landing
