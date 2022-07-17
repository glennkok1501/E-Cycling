import { useState } from 'react'
import { Modal } from 'react-bootstrap'
import Icon from '@mdi/react'
import {mdiDownload } from '@mdi/js'

const Template = ({header, images}) => {
    const size = 30
    const [selected, setSelected] = useState('')

    return ( 
        <>
            <div className='card rounded shadow-lg' style={{"background": "rgba(255,255,255,0.8)"}}>
                <div className='card-body text-center'>
                    <h1>{header}</h1>
                    <hr />
                    <div className='d-lg-none'>
                    <div className='d-flex' style={{"overflowY": "auto"}}>
                            {
                                images.map((act) => (
                                    
                                    <div type="button" key={act} onClick={() => setSelected(act)}>
                                        <img className='rounded-circle ms-3 me-3' src={act} alt="activity" style={{"width": `${size}vh`, "height": `${size}vh`, "objectFit": "cover"}}/>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div className='d-none d-lg-block'>
                        <div className='d-flex justify-content-around'>
                                {
                                    images.map((act) => (
                                        
                                        <div key={act} className="btn hover" onClick={() => setSelected(act)}>
                                            <img className='rounded-circle' src={act} alt="activity" style={{"width": `${size}vh`, "height": `${size}vh`, "objectFit": "cover"}}/>
                                        </div>
                                    ))
                                }
                            </div>
                        
                    </div>
                    
                </div>
            </div>
            <Modal show={selected} onHide={() => setSelected(null)} centered scrollable>
                <Modal.Header closeButton>
                    <h3>Preview</h3>
                </Modal.Header>
                <Modal.Body>
                    <img className='img-fluid' src={selected} alt="preview" />
                </Modal.Body>
                <Modal.Footer>
                    <a href={selected} download>
                        <div className='btn btn-success btn-lg hover'>
                            <Icon path={mdiDownload } size={1} />
                            Download
                        </div>
                    </a>
                    
                </Modal.Footer>
            </Modal>
        </>
        
     );
}
 
export default Template;