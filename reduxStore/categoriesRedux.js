import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  women: null,
  beauty: null,
  men: null,
  food: null,
  animals: null,
  home: null,
  electronics:null,
  baby:null,
  health:null,
  others:null
};




const categoriSlice = createSlice({
  name: "categori",
  initialState,
  reducers: {
    setCategori: (state, action) => {
      state.women = action.payload.women;
      state.beauty = action.payload.beauty;
      state.men = action.payload.men;
      state.food = action.payload.food;
      state.animals = action.payload.animals;
      state.home = action.payload.home;
      state.electronics = action.payload.electronics;
      state.baby = action.payload.baby;
      state.health = action.payload.health;
      state.others = action.payload.others;
    },
  },
});

export const { setCategori } = categoriSlice.actions;

export const selectWomen = (state) => state.categori.women;
export const selectBeauty = (state) => state.categori.beauty;
export const selectMen = (state) => state.categori.men;
export const selectFood = (state) => state.categori.food;
export const selectAnimals = (state) => state.categori.animals;
export const selectHome = (state) => state.categori.home;
export const selectElectronics = (state) => state.categori.electronics;
export const selectBaby = (state) => state.categori.baby;
export const selectHealth = (state) => state.categori.health;
export const selectOthers = (state) => state.categori.others;


export default categoriSlice.reducer;
