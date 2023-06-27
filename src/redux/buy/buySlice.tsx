import { createSlice } from '@reduxjs/toolkit'
const initialState= {
  film:{
    name:'',
    image:'',
    sub:'',
    premiere:''
  }

    }

const buySlice = createSlice({
  name: 'film',
  initialState,
  reducers: {
    doBuyFilm:(state,action) => {
      state.film.name = action.payload.name
      state.film.image = action.payload.image
      state.film.sub = action.payload.sub
      state.film.premiere = action.payload.premiere

    },
    doRefreshFilm:(state, action) => {
        // console.log('check payload',action.payload)
        state.film.name = action.payload.name
        state.film.image = action.payload.image
        state.film.sub = action.payload.sub
        state.film.premiere = action.payload.premiere
    },
  },
})
export const {doBuyFilm, doRefreshFilm} = buySlice.actions;
export default buySlice.reducer;