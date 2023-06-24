const CurrentPage = (props:any) => {
const {page} = props
    return (
        <div className='contents-page'>
            <a href="/">Trang chủ </a> {'> '}
            <a href={`${page}`}>{page}</a>
        </div>
    )
}
export default CurrentPage  