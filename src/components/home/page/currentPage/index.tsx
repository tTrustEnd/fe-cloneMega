import { NavLink } from "react-router-dom"

const CurrentPage = (props: any) => {
    const { page } = props
    return (
        <div className='contents-page'>
            <NavLink to="/">Trang chủ </NavLink> {'> '}
            <NavLink to={`/${page}`}>{page}</NavLink>
        </div>
    )
}
export default CurrentPage  