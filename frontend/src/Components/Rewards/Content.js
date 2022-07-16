import { useState } from "react";
import { Modal } from "react-bootstrap";
import GiftTemplate from "./GiftTemplate";
import Store from "./Store";
import { v4 as uuidv4 } from 'uuid';

const Content = () => {
    const data = Store()
    const [selected, setSelected] = useState(null)
    const [code, setCode] = useState('')

    const handleCode = () => {
        setCode(uuidv4())
    }

    const handleClose = () => {
        setSelected(null)
        setCode('')
    }

    return ( 
        <>
            <div className="row">
                {
                    data.length > 0 && 
                    data.map((gift) => (
                        <div className="col-lg-6 mt-3" key={gift._id} onClick={() => setSelected(gift)}>
                            <GiftTemplate gift={gift}/>
                        </div>
                    ))
                }
            </div>
            <Modal show={selected !== null} onHide={handleClose} centered>
                <Modal.Header closeButton>
                    <h5>Redeem Reward</h5>
                </Modal.Header>
                <Modal.Body>
                    {selected && <div>
                    Do you want to redeem <strong>${selected.amount} {selected.name}</strong> for <strong>{selected.points} points</strong>?
                    </div> }
                    {code && 
                    <div className="text-center mt-3">
                        <div className="form-control bg-dark text-white">
                            {code}
                        </div>
                        <small className="text-muted">The receipt has been sent to your email</small>
                    </div>
                    }
                </Modal.Body>
                <Modal.Footer>
                    <div className={`btn btn-sm btn-success ${code && 'disabled'}`} onClick={handleCode}>Confirm</div>
                </Modal.Footer>
            </Modal>
        </>
        
     );
}
 
export default Content;