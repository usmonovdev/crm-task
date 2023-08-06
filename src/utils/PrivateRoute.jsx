import { Navigate } from "react-router-dom"

export const PrivateRoute = ({ navigateTo, auth, children }) => {
    return auth ? children : <Navigate to={navigateTo}/>
}