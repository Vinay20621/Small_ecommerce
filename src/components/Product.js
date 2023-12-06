import { useDispatch } from "react-redux";
import { addCart} from "../store/Slice/cartSlice";
import { useState } from "react";

const Product = (props) => {

const dispatch=useDispatch()
const {product}=props;
const [isAdding,setisAdding]=useState(false)
   
function addToCart(e,product)
{
    

    dispatch(addCart(product))
    setisAdding(true)
    setTimeout(()=>
    {
        setisAdding(false)
    },1000)
  
}
    return (
       
            <div className='mx-3 my-boarder'>
            <div className="text-center place-content-center">
            <img src={product.image} alt="pizza" />
                <h2 className="text-lg font-bold py-2">{product.name}</h2>
                <span className="bg-gray-200 py-1 rounded-full text-sm px-4">{ product.size }</span>
            </div>
            <div className="flex justify-between items-center mt-4 mx-4 mb-4">
                <span>₹ { product.price }</span>
                <button disabled={isAdding} onClick={(e) => { addToCart(e, product) }} className={`${ isAdding ? 'bg-green-500': 'bg-yellow-500' } py-1 px-4 rounded-full font-bold`}>ADD{isAdding ? 'ED': ''}</button>
            </div>
        </div>
       
    )
}

export default Product;
