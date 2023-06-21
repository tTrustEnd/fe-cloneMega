import axios from '../utils/customize-axios'
export const getUserSV = () => {
    return axios.get('v1/api/user')
}
export const createUserSV = (data:{email:string,password:string,name:string}) => {
    return axios.post('v1/api/user',data)
}
export const loginSV = (data:{email:string, password:string}) => {
    return axios.post('v1/api/auth/login',data)
}
export const updateUserAdminSV = (data:any) => {
    return axios.put('v1/api/admin/user',data)
}
export const deleteUserSV = (id:any)=>{
    return axios.delete(`/v1/api/user?id=${id}`)
}
export const sortbyField = (query:any) => {
    return axios.get(`v1/api/user?${query}`)
}
export const getFilmsByFieldSV = (query?:any) => {
    return axios.get(`/v2/api/films/?${query}`)
}
export const getFilmsSV = () => {
    return axios.get(`/v2/api/films`)
}
export const updateFilmSV = (data:any) => {
    return axios.put('v2/api/films',data)
}
export const deleteFilmSV = (id:any) =>{
    return axios.delete(`v2/api/films/?id=${id}`)
}
