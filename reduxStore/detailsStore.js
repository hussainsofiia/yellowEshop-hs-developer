import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  detailsBox:[],
  searchBox:[],
  relatedItems:[],
  
};

const detailSlice = createSlice({
  name: "detail",
  initialState,
  reducers: {
  
    addDetails: (state, action) => {
      state.detailsBox = action.payload;
     
    },



    addSearchpages: (state, action) => {
      state.searchBox = action.payload;
     
    },
    addTorelated: (state, action) => {
      state.relatedItems = action.payload;
     
    },

    removeDetails: (state) => {
      state.detailsBox = [];
      
    },
    removeSaerch: (state) => {
      state.searchBox = [];
      
    },


   



  },
});

export const { addDetails, removeDetails,addSearchpages,removeSaerch,addTorelated } = detailSlice.actions;

export const selectDetails = (state) => state.detail.detailsBox;
export const selectSearchDetails = (state) => state.detail.searchBox;
export const selectrelated = (state) => state.detail.relatedItems;


export default detailSlice.reducer;
