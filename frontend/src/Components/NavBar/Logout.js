import axios from "axios"
import { useDispatch } from "react-redux"
import { useHistory } from "react-router-dom"
import { setUser } from "../../redux/features/userSlice"

const Logout = () => {
    const history = useHistory()
    const dispatch = useDispatch()

    const handleLogout = () => {
        axios.get(`${process.env.REACT_APP_API}/auth/logout`, { withCredentials: true})
            .then((res) => {
                if (res.status === 200) {
                    history.push('/login')
                    dispatch(setUser(null))

                }
                else {
                    console.log('error logging out')
                }
            })
            .catch((err) => console.log(err))
    }
    return ( 
        <div type="button" onClick={handleLogout}>Logout</div>
     );
}
 
export default Logout;