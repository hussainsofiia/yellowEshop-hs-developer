import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  orderBusket:[],
  addItemCart:[],
  totalPrice: 0,
  totalQuantities: 0,
  deliveryfees: 0
 
};

const productSlice = createSlice({
  name: "product",
  initialState,
  
  reducers: {
    
   
  
     addTocartRedux: (state, action) => {
      const check = state.addItemCart.find(pr => pr.id === action.payload.id);
        if(check){
            return state;

        } 
        state.addItemCart = [...state.addItemCart, action.payload]
      
},
addOrderbusket: (state, action) => {
  state.orderBusket = [...state.orderBusket, action.payload];
 
},
     addtotal: (state, action) => {
      state.totalPrice = action.payload;
 
      },
      deliverycharge: (state, action) => {
        state.deliveryfees = action.payload;
   
        },

      removeAll: (state) => {
        state.addItemCart = [];
        state.totalPrice =0;
        state.deliveryfees =0;
        
      },
        
  removeFromBasket: (state, action) => {
    const index = state.addItemCart.findIndex(basketItem => basketItem.id === action.payload.id);

    let newBasket = [...state.addItemCart];

    if (index >=0) {
      newBasket.splice(index, 1)
    } else {
      console.warn(`Cant remove product (id: ${action.payload.id}) as its not in Basket!`);
    }
    state.addItemCart = newBasket;

  },
  addQuantityToItem: (state, action) => {
   const findPro = state.addItemCart.find(item => item.id === action.payload);
  const index = state.addItemCart.findIndex(item => item.id === action.payload);
  findPro.quantity +=1;
    state.addItemCart[index] = findPro;

    



   // state.addItemCart.flat().forEach((item) => {
    //  if (item.Id === action.payload) {
       // item.qty +=1;
    //  }
   // });
  },


  
  subtractQuantityFromItem: (state, action) => {
    const check = state.addItemCart.find(item => item.id === action.payload);
   const indexx = state.addItemCart.findIndex(item => item.id === action.payload);
   if(check.quantity > 1){
   check.quantity -=1;
     state.addItemCart[indexx] = check;
    }
 
   },

  //subtractQuantityFromItem: (state, action) => {
  //  state.addItemCart.flat().forEach((item) => {
    //  if (item.Id === action.payload) {
   //     item.qty -=1;
   //   }
  //  });
//  },

  },
});




export const {addOrderbusket,addTocartRedux ,removeFromBasket,addQuantityToItem,subtractQuantityFromItem,addtotal,removeAll,deliverycharge} = productSlice.actions;
export const selectOrder = (state) => state.product.orderBusket;  
export const selectDeliverfees = (state) => state.product.deliveryfees;  
export const selecttotal = (state) => state.product.totalPrice;  
export const selectCartItems = (state) => state.product.addItemCart;  
export const selectTotalqty = (state) => state.product.addItemCart.reduce((quantity, addItemCart) => Number(addItemCart.quantity) + quantity, 0);

//after discount total
export const selectTotal = (state) => state.product.addItemCart
.reduce((total, addItemCart) => total + (addItemCart.price - (addItemCart.discountPrice / 100 * addItemCart.price)) * addItemCart.quantity , 0);

export default productSlice.reducer;
 


///discunt price

