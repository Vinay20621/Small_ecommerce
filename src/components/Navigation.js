import { Link } from 'react-router-dom';
import {  useSelector } from 'react-redux';

const Navigation = () => {
    const cartStyle = {
      background: '#F59E0D',
      display: 'flex',
      padding: '6px 12px',
      borderRadius: '50px'
    }
   
const cart=useSelector((state)=>state.cart)

    return (
        <>
        <div className='my-color'>
            <nav className="container mx-auto flex items-center justify-between py-4 my-color">
                    <Link to="/">
                        <img style={{ height: 60 }} src="/images/logo.png" alt="logo" />
                    </Link>
                    <ul className="flex items-center">
                        <li><Link to="/"className="ml-6 text-lg font-medium text-white">Home</Link></li>
                        <li className="ml-6 text-lg font-medium text-white"><Link to="/products">Products</Link></li>
                        <li className="ml-6 ">
                            <Link to="/cart">
                                <div style={cartStyle}>
                                    <span>{ cart.quantity ? cart.quantity : 0 }</span>
                                    <img className="ml-2 font-medium" src="/images/cart.png" alt="cart-icon" />
                                </div>
                            </Link>
                        </li>
                    </ul>
            </nav>
            </div>
        </>
    )
}

export default Navigation;
