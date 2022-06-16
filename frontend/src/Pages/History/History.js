import { Container } from "react-bootstrap";
import PickupHistory from "../../Components/History/PickupHistory";
import NavBar from "../../Components/NavBar/NavBar";

const History = () => {
    return ( 
        <div>
            <NavBar />
            <Container>
                <div className="contents">
                    <PickupHistory />
                </div>
            </Container>
            
        </div>
     );
}
 
export default History;