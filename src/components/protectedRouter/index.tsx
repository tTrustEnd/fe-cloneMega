import { useSelector } from "react-redux";
import NotFound from "../notfound";

const CheckRoleBase = (props) => {
    const user = useSelector((state:any) => state.user);
    // console.log(user.account)
    if (user.auth === true && user.account.user.role === 'admin') {
        return (<>{props.children}</>)
    }else{
        return(<><NotFound/></>)
    }
}

const ProtectedRoute = (props) => {

    return (
        <div>
            <CheckRoleBase>
                {props.children}
            </CheckRoleBase>
        </div>
    )
}
export default ProtectedRoute;