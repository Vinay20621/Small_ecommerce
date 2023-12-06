import { createSlice } from "@reduxjs/toolkit";


const cartSlice=createSlice({
    name:'cart',
    initialState:{
        quantity:0,
        product:[],
        total:0,
    },
    reducers:
    {
        addCart(state,action)
        {
           const {payload} = action
           const {id,image,name,price}=payload
            const find=state.product.filter((i)=>i.id===action.payload.id)
            if(find.length>0)
            {
                
               state.product=state.product.map((i)=>
               {
                    if(i.id===id) return {id,image,name,price,tPrice:i.tPrice+price,quantity:i.quantity+1};
                    else{
                        return i;
                    }
               })
            }
            else
            {
                state.product.push({id,image,name,price,tPrice:price,quantity:1})
            }
            state.quantity=state.quantity+1
            state.total=state.total+price
        },
        removeCart(state,action)
        {
           const {payload} = action
           const {id,image,name,price,quantity}=payload
           
           if(quantity===1) 
           {
            state.product= state.product.filter((i)=>i.id!==id)
            state.quantity=state.quantity-1
            state.total=state.total-price
            return          

           }
           state.product= state.product.map(obj =>
            obj.id === id ? { ...obj, price,tPrice:obj.tPrice-price,quantity:obj.quantity - 1} : obj
          );
          
              
            
            
            state.quantity=state.quantity-1
            state.total=state.total-price
        },
        deleteCard(state,action)
        {
            const {payload} = action
           const {id,quantity,price}=payload             

           state.product= state.product.filter((i)=>i.id!==id)        
        
            
            
            state.quantity=state.quantity-quantity
            state.total=state.total-(price*quantity)

        }
    }
    
})
export const {addCart,removeCart,deleteCard}=cartSlice.actions
export default cartSlice.reducer