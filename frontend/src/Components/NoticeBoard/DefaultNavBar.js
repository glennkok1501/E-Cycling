import { Link } from "react-router-dom";

const DefaultNavBar = () => {
    return ( 
        <nav className="navbar fixed-top navbar-dark bg-dark text-center shadow">
            <Link to="/" className="navbar-brand w-100" style={{"float": "none"}}>
                <img src="/logo256-icon.png" alt="logo" width={40} height={40}/>
                Cycling
            </Link>
        </nav>
     );
}
 
export default DefaultNavBar;