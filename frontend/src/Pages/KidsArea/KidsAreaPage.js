import { Container } from 'react-bootstrap';
import DefaultNavBar from '../../Components/NoticeBoard/DefaultNavBar';
import './kidsarea.css'
import bg from '../../assets/background/kidsarea_bg.mp4'
import Activities from '../../Components/KidsArea/Activities';
import Family from '../../Components/KidsArea/Family';
import Icon from '@mdi/react';
import { mdiGamepadOutline, mdiHeadLightbulbOutline } from '@mdi/js';

const KidsAreaPage = () => {
    return ( 
        <div>
            <video id="background-video" autoPlay loop muted>
                <source src={bg} type="video/mp4" />
            </video>

            <DefaultNavBar />
            <Container>
                <div className="contents">
                    <div className='row'>
                        <div className='col-lg-6 text-center mt-3'>
                                <a className='text-decoration-none' href="https://tkot467we9d.typeform.com/to/ulfhp8wB" target="_blank">
                                    <button className='btn btn-lg btn-secondary w-100 p-3'>
                                            <strong className='text-white'><Icon size={1} path={mdiHeadLightbulbOutline} /> Take a Quiz</strong>
                                    </button>
                                
                                </a>
                        </div>
                        <div className='col-lg-6 text-center mt-3'>
                                <a className='text-decoration-none' href="https://www.abcya.com/games/recycling_game " target="_blank">
                                    <button className='btn btn-lg btn-secondary w-100 p-3'>
                                            <strong className='text-white'><Icon size={1} path={mdiGamepadOutline} /> Play Games</strong>
                                    </button>

                                </a>
                        </div>
                    </div>
                    <div className='mt-3'>
                        <Activities />
                    </div>
                    <div className='mt-3'>
                        <Family />
                    </div>
                </div>
            </Container>
        </div>
     );
}
 
export default KidsAreaPage;