import { useEffect, useState } from "react";
import axios from "axios";
import {useDispatch} from 'react-redux'
import { setUser } from "../../redux/features/userSlice";

const RequireAuth = () => {

    const endpoint = `${process.env.REACT_APP_API}/auth/verify`
    const dispatch = useDispatch()
    const [auth, setAuth] = useState(null)
    const [isTokenValid, setIsTokenValid] = useState(false)

    useEffect(() => {
        // send jwt token to API for verification
        axios.get(endpoint, { withCredentials: true })
        .then((res) => {
            if (res.data) {
                setAuth(res.data)
                dispatch(setUser(res.data))
            }
        })    
        .then (() => {setIsTokenValid(true)})
        .catch((err) => {
            console.log(err)
            setAuth(null)
            setIsTokenValid(false)

        })
    }, [endpoint, dispatch])

    return {auth, isTokenValid}
}

export default RequireAuth
