import { Redirect, Route } from 'react-router'
import Loading from '../Utils/Loading'
import RequireAuth from './RequireAuth'

const ProtectedRoute = ({component: Component, ...options}) => {

    const {auth, isTokenValid} = RequireAuth()

    if (!isTokenValid) return (
        <Loading isPending={true} />
    )

   return (<Route {...options}
    render={(props) => {return auth ? <Component {...props} /> : <Redirect to="/login"/>}} />
   )

    
}

export default ProtectedRoute