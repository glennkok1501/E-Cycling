import { Redirect, Route } from 'react-router'
import RequireAuth from './RequireAuth'
import Verify from './Verify'

const ProtectedRoute = ({component: Component, ...options}) => {

    const {auth, isTokenValid} = RequireAuth()

    if (!isTokenValid) return (
        <Verify />
    )

   return (<Route {...options}
    render={(props) => {return auth ? <Component {...props} /> : <Redirect to="/login"/>}} />
   )

    
}

export default ProtectedRoute