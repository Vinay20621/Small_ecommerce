import Product from '../components/Product'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { filterByValue, filterByCategory, filterByBrand } from '../store/Slice/productSlice'
import { useState } from 'react';
const Products = () => {
    const products = useSelector((state) => state.products)
    const dispatch = useDispatch();
    



    function applyFilterByValue(value) {

        dispatch(filterByValue(value))
       



    }
    function applyFilterByCatogary(value) {

        dispatch(filterByCategory(value))
        
    }
    function applyFilterByBrand(value) {

        dispatch(filterByBrand(value))        


    }



    return (
        <div className="bb"> 
        <div className="container mx-auto pb-24 " >
            <h1 className="text-2xl sm:text-5xl font-bold mb-8 w-12 mx-auto  text-white pt-4" >Products
               
            </h1>
            {/* // drop down */}
            <div className='text-center '>

                <select className='border-4 '  onChange={(e) => applyFilterByValue(e.target.value)}>
                    <option value="">All</option>
                    <option value="men">Men</option>
                    <option value="women">Women</option>
                    <option value="girls">Girls</option>
                    <option value="boys">Boys</option>
                </select>
                <select className='border-4 ms-5 ' onChange={(e) => applyFilterByCatogary(e.target.value)}>
                    <option value="">All</option>
                    <option value="shirt">Shirt</option>
                    <option value="dogShirt">dogShirt</option>
                    <option value="sleepShirt">sleepShirt</option>

                </select>
                <select className='border-4 ms-5 ' onChange={(e) => applyFilterByBrand(e.target.value)}>
                    <option value="">All</option>
                    <option value="roadster">Roadster</option>
                    <option value="zara">Zara</option>
                    <option value="parx">Parx</option>

                </select>
            </div>





            <div className="grid md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-4 mt-8 gap-24 mx-2">

                {
                    products.filterData.length > 0 ?
                        products.filterData.map(product => {

                            return <Product key={product.id} product={product} />
                        })
                        :
                        <h1 className="text-2xl sm:text-5xl text-center my-3">Not Found</h1>
              
                       
                        




                }
            </div>
        </div>
        </div>

    )
}

export default Products;
