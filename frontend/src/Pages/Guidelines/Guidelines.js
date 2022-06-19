import { Container } from "react-bootstrap";
import DefaultNavBar from "../../Components/NoticeBoard/DefaultNavBar";
import Checklist from "./Checklist";


const Guidelines = () => {
    return ( 
        <div>
            <DefaultNavBar />
            <Container>
                <div className="contents">
                    <div className="text-center">
                        <h3>How to use the <span className="text-primary">Blue Bins </span>correctly</h3>
                        <img className="img-fluid rounded" src="https://image.shutterstock.com/image-photo/singapore-january-19-2019-blue-600w-1289115262.jpg" alt="blue bin" />
                    </div>
                </div>
                <div className="mb-5">
                    <Checklist />

                </div>
            </Container>
            
        </div>
     );
}
 
export default Guidelines;