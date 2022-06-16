import { Container } from "react-bootstrap";
import NavBar from "../../Components/NavBar/NavBar";

const Home = () => {
    return ( 
        <div>
            <NavBar />
            <Container>
                <div className="contents">
                    Home
                </div>
            </Container>
            
        </div>
     );
}
 
export default Home;