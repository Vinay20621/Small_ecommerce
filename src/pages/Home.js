import Products from '../components/Products';
import Footer from '../components/Footer'
import { Link } from 'react-router-dom';

import '../Index.css'
const Home = () => {
    return (
        <>
        <div className="hero pt-16 h-1/2  " >
        
            <div className="container mx-auto flex items-center justify-between">
                <div className="w-1/2">
                    <h6 className="text-lg" ><em>would you like to shop?</em></h6>
                    <h1 className="text-2xl md:text-6xl font-bold" >Don't wait !</h1>
                    <Link  to="/products">
                    <button className="px-6 py-2 rounded-full text-white font-bold mt-4 bg-yellow-500 hover:bg-yellow-600 ">Order Now</button>
                    </Link>
                </div>
                <div className="w-1/2">
                    <img className="w-46 mb-4 " src="/images/myImg.png"  alt="image" />
                </div>
           
        </div>
        </div>
        <div >
            <Products />
        </div>
        <Footer/>
       </>
    )
}

export default Home;
