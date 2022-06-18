import { Container } from "react-bootstrap";
import DefaultNavBar from "../../Components/NoticeBoard/DefaultNavBar";
import View from "../../Components/NoticeBoard/View";

const NoticeBoard = () => {
    return ( 
        <div>
            <DefaultNavBar />
            <Container>
                <div className="contents">
                    <div className="row">
                        <div className="col-md-8 offset-md-2">
                        <View />

                        </div>
                    </div>
                </div>
            </Container>
            
        </div>
     );
}
 
export default NoticeBoard;