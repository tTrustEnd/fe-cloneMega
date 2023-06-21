import { createSlice } from '@reduxjs/toolkit'
const initialState= {
  auth:false,
  isloading:false,
    account:{
        email:'',
        name:'',
        role:'',
        id:''
    }
}
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    doLogin:(state,action) => {
      localStorage.setItem("access_token",action.payload.data.access_token)
      state.account=action.payload.data,
      state.auth=true;
      state.isloading=false;
    },
    doRefresh:(state, action) => {
      state.account=action.payload.account;
      state.auth=action.payload.auth;
      state.isloading=action.payload.isloading
    },
  },
})
export const {doLogin, doRefresh} = userSlice.actions;
export default userSlice.reducer;