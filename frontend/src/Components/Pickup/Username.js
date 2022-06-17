import {Link} from 'react-router-dom'

const Username = ({user}) => {
    return ( 
            <Link className='text-black text-decoration-none' to={`/account/${user._id}`}><strong>{user.username}</strong></Link> 
     );
}
 
export default Username;