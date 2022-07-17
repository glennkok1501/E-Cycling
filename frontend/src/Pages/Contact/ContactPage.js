import { Card, Container } from "react-bootstrap";
import DefaultNavBar from "../../Components/NoticeBoard/DefaultNavBar";

const ContactPage = () => {
    return ( 
        <div>
            <DefaultNavBar />
                <Container>
                <div className='centered w-md-75'>
                    <Card className='shadow-lg'>
                        <Card.Body className="m-5">
                            <h1 className="text-center">Contact Us</h1>
                            <h5>Any further inquiries? Contact us via email <a href="mailto:ecycling@gmail.com">ecycling@gmail.com</a></h5>
                            <div className='mt-3 text-center'>
                                <h6>want to subscribe to our mailing list?</h6>
                                <div className="btn-sm btn btn-secondary">Click here</div>
                            </div>
                        </Card.Body>
                    </Card>
                   
                </div>
            </Container>
        </div>
     );
}
 
export default ContactPage;