import { Link } from 'react-router-dom';

import hero1 from '../assets/hero5.jpg';
import hero2 from '../assets/hero6.jpg';
import hero3 from '../assets/hero7.jpg';
import hero4 from '../assets/hero8.jpg';

const carouselImages = [hero1, hero2, hero3, hero4]
const Hero = () => {
    return (
        <div className=' grid grid-cols-1 lg:grid-cols-2 gap-24 items-center'>
            <div>
                <h1 className='max-w-2xl text-4xl font-bold tracking-tight  sm:text-6xl '>
                    We’re changing the way people shop.
                </h1>

                <p className='mt-8 max-w-xl text-lg leading-8'>
                    🎈PowPow balloons by Paulina
                    🎈Any occasion, big or small
                    🎈 Limerck and surrounding areas
                    🎈 DM for availability
                </p>
                <div className='mt-10 '>
                    <Link to='products' className='btn btn-primary '>
                        Our Products
                    </Link>
                </div>
            </div>
            <div className='hidden  h-[28rem] lg:carousel carousel-center   p-4 space-x-4 bg-neutral rounded-box'>
                {carouselImages.map((image, index) => {
                    return (
                        <div key={image} className='carousel-item'>
                            <img
                                src={image}
                                className='rounded-box h-full w-80  object-cover'
                            />
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
export default Hero;
