import { useSelector } from 'react-redux';
import { useDispatch } from "react-redux";
import { addCart,removeCart,deleteCard } from "../store/Slice/cartSlice";
const Cart = () => {
const products=useSelector((state)=>state.cart)
 const dispatch = useDispatch()
function addToCart(e,product)
{
    dispatch(addCart(product))
    
    
}
function removeToCart(e,product)
{
    dispatch(removeCart(product))
    
    
}
function deletToCart(e,product)
{
    dispatch(deleteCard(product))
    
    
}
    return (
        !products.product.length
        ? <img className="mx-auto w-1/2 mt-12" src="/images/empty-cart.png" alt="" />
        :
        <div className="container w-full mx-auto lg:w-1/2  pb-24  ">
            <h1 className="text-1xl sm:text-1xl font-bold mb-8 w-20 mx-auto   pt-4" >Cart items</h1>
            <ul>
                {
                    products.product.map(product => {
                        return (
                            <li className="mb-12" key={product.id}>
                            <div className="flex items-center justify-between my-boarder p-6">
                                <div className="flex items-center">
                                    <img className="h-16" src={product.image} alt="" />
                                    <span className="font-bold ml-4 w-18">{ product.name }</span>
                                </div>
                                <div>
                                   <button onClick={(e) => { removeToCart(e, product) }} className="bg-yellow-500 px-4 py-2 rounded-full leading-none ">-</button>
                                   <b className="px-4">{product.quantity}</b>
                                   <button onClick={(e) => { addToCart(e, product) }} className="bg-yellow-500 px-4 py-2 rounded-full leading-none">+</button>
                                </div>
                                <span>{product.tPrice}</span>
                                <button onClick={(e) => { deletToCart(e, product) }} className="bg-red-500 px-4 py-2 rounded-full leading-none text-white">Delete</button>
                            </div>
                        </li>
                        )
                    })
                }
            </ul>
            <hr className="my-6"/>
            <div className="text-right">
                <b>Grand Total:</b> ₹ {products.total}
            </div>
            <div className="text-right mt-6">
                <button  className="bg-yellow-500 px-4 py-2 rounded-full leading-none">Order Now</button>
            </div>
        </div>
    )
}

export default Cart;
