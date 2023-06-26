import { createSlice } from '@reduxjs/toolkit'
const initialState= {
  film:{
    name:'',
    image:''
  }

    }

const buySlice = createSlice({
  name: 'film',
  initialState,
  reducers: {
    doBuyFilm:(state,action) => {
      state.film.name = action.payload.name
      state.film.image = action.payload.image
    },
    doRefreshFilm:(state, action) => {
        // console.log('check payload',action.payload)
      state.film.name = action.payload.name     
      state.film.image = action.payload.image
    },
  },
})
export const {doBuyFilm, doRefreshFilm} = buySlice.actions;
export default buySlice.reducer;