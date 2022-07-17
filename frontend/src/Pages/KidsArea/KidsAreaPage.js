import { Container } from 'react-bootstrap';
import DefaultNavBar from '../../Components/NoticeBoard/DefaultNavBar';
import './kidsarea.css'
import bg from '../../assets/background/kidsarea_bg.mp4'

const KidsAreaPage = () => {
    return ( 
        <div>
            <video id="background-video" autoPlay loop muted>
                <source src={bg} type="video/mp4" />
            </video>

            <DefaultNavBar />
            <Container>
                <div className="contents">
                    <div className='card rounded-pill'>
                        <div className='card-body'>
                            <h1>Test</h1>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
     );
}
 
export default KidsAreaPage;