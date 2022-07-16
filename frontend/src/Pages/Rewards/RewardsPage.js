import { Container } from "react-bootstrap";
import NavBar from "../../Components/NavBar/NavBar";
import Content from "../../Components/Rewards/Content";

const RewardsPage = () => {
    return ( 
        <div>
            <NavBar />
            <Container>
                <div className="contents">
                    <Content />
                </div>
            </Container>
            
        </div>
     );
}
 
export default RewardsPage;