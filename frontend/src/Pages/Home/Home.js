import { Container } from "react-bootstrap";
import NavBar from "../../Components/NavBar/NavBar";
import Feed from "../Feed/Feed";

const Home = () => {
    return ( 
        <div>
            <NavBar />
            <Container>
                <div className="contents">
                    <Feed />
                </div>
            </Container>
            
        </div>
     );
}
 
export default Home;