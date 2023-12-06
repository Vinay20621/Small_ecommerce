import { createSlice, current } from '@reduxjs/toolkit';
import Pdata from '../../Pdata';

const productSlice = createSlice({
  name: 'products',
  initialState: {
    data: Pdata,
    filterData: Pdata,
    gender: '',     // Default to empty string
    category: '',   // Default to empty string
    brand: '',      // Default to empty string
  },
  reducers: {
    filterByValue(state, action) {
      const { payload } = action;
      state.gender=payload 
      if(state.category==='' && state.brand==='')
      {

          if(payload==='') 
          {
            state.filterData=state.data;
            return;
          }
          const filteredPeople = state.data.filter(person =>person.gender===payload);
          state.filterData=filteredPeople;
          return;
      }
      else if(state.category==='' && state.brand!=='')
      {
          if(payload==='') 
          {
            state.filterData=state.data.filter((person)=>person.name===state.brand);
            return;
          }
          const filteredPeople = state.data.filter(person =>person.gender===payload && person.name===state.brand);
          state.filterData=filteredPeople;
          return;
      }
      else if(state.category!=='' && state.brand==='')
      {
          if(payload==='') 
          {
            state.filterData=state.data.filter((person)=>person.category===state.category);
            return;
          }
          const filteredPeople = state.data.filter(person =>person.gender===payload && person.category===state.category);
          state.filterData=filteredPeople;
          return;
      }
      // Assuming payload is an object containing 'gender' and 'brand'
      if(payload==='') 
          {
            state.filterData=state.data.filter((person)=>person.category===state.category && person.name===state.brand);
            return;
          }
   
  const filteredPeople = state.data.filter(person => person.name === state.brand && person.gender===payload && person.category===state.category);
    
  state.filterData=filteredPeople
 
    },
    filterByCategory(state, action) {
      const { payload } = action;
      state.category=payload 
      if(state.gender==='' && state.brand==='')
      {

          if(payload==='') 
          {
            state.filterData=state.data;
            return;
          }
          const filteredPeople = state.data.filter(person =>person.category===payload);
          state.filterData=filteredPeople;
          return;
      }
      else if(state.gender==='' && state.brand!=='')
      {
          if(payload==='') 
          {
            state.filterData=state.data.filter((person)=>person.name===state.brand);
            return;
          }
          const filteredPeople = state.data.filter(person =>person.category===payload && person.name===state.brand);
          state.filterData=filteredPeople;
          return;
      }
      else if(state.gender!=='' && state.brand==='')
      {
          if(payload==='') 
          {
            state.filterData=state.data.filter((person)=>person.gender===state.gender);
            return;
          }
          const filteredPeople = state.data.filter(person =>person.category===payload && person.gender===state.gender);
          state.filterData=filteredPeople;
          return;
      }
      // Assuming payload is an object containing 'gender' and 'brand'
      if(payload==='') 
          {
            state.filterData=state.data.filter((person)=>person.gender===state.gender && person.name===state.brand);
            return;
          }
   
  const filteredPeople = state.data.filter(person => person.name === state.brand && person.category===payload && person.gender===state.gender);
    
  state.filterData=filteredPeople
 
    },
    filterByBrand(state, action) {
      const { payload } = action;
      state.brand=payload 
      if(state.category==='' && state.gender==='')
      {

          if(payload==='') 
          {
            state.filterData=state.data;
            return;
          }
          const filteredPeople = state.data.filter(person =>person.name===payload);
          state.filterData=filteredPeople;
          return;
      }
      else if(state.category==='' && state.gender!=='')
      {
          if(payload==='') 
          {
            state.filterData=state.data.filter((person)=>person.gender===state.gender);
            return;
          }
          const filteredPeople = state.data.filter(person =>person.gender===state.gender && person.name===payload);
          state.filterData=filteredPeople;
          return;
      }
      else if(state.category!=='' && state.gender==='')
      {
          if(payload==='') 
          {
            state.filterData=state.data.filter((person)=>person.category===state.category);
            return;
          }
          const filteredPeople = state.data.filter(person =>person.name===payload && person.category===state.category);
          state.filterData=filteredPeople;
          return;
      }
      // Assuming payload is an object containing 'gender' and 'brand'
      if(payload==='') 
          {
            state.filterData=state.data.filter((person)=>person.category===state.category && person.gender===state.gender);
            return;
          }
   
  const filteredPeople = state.data.filter(person => person.name === payload && person.gender===state.gender && person.category===state.category);
    
  state.filterData=filteredPeople
    },
  },
});

export const { filterByValue, filterByCategory, filterByBrand } =  productSlice.actions;



export default productSlice.reducer;
