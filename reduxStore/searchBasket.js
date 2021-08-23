import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchBox:'',
};

const searchlSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    addSearch: (state, action) => {
      state.searchBox = action.payload;
     
    },

    removeSearch: (state) => {
      state.searchBox = [];
      
    },
  },
});

export const { addSearch, removeSearch } = searchlSlice.actions;

export const selectSearch = (state) => state.search.searchBox;


export default searchlSlice.reducer;
