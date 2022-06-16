import { Container } from "react-bootstrap";
import NavBar from "../../Components/NavBar/NavBar";
import Main from "../../Components/Pickup/Main";

const Pickup = () => {
    return ( 
        <div>
            <NavBar />
            <Container>
                <div className="contents">
                    <Main />
                </div>
            </Container>
            
        </div>
     );
}
 
export default Pickup;