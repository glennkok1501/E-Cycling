import axios from "axios";
import { useState } from "react";
import { Modal, Spinner } from "react-bootstrap";
import Username from "../Pickup/Username";
import Error from "../Utils/Error";
import Rate from "./Rate";
import ShowRating from "./ShowRating";

const PickupModal = ({pickup, pickups, setPickups, showPickupModal, setShowPickupModal}) => {

    const [error, setError] = useState('')

    const handleClose = () => {
        setError('')
        setShowPickupModal(false)
    }    

    return ( 
        <Modal scrollable={true} show={showPickupModal} onHide={handleClose} centered fullscreen={'md-down'}>
            <Modal.Header closeButton>
                <h5>Details</h5>
            </Modal.Header>
            <Modal.Body>
                <Error error={error} />
                <img src={pickup.userImage} className="img-fluid rounded w-100" alt="user"/>
                <div className="mt-3">
                    <h6>{pickup.userMessage ? pickup.userMessage : 'No message'}</h6>
                </div>


                {pickup.status > 0 && 
                <>
                    <hr />
                    <h5>Volunteer: <Username user={pickup.vUserId} /></h5>
                </>}
                {pickup.status === 2 && 
                <>
                    <img src={pickup.vImage} className="img-fluid rounded w-100" alt="user"/>
                    <h6>{pickup.vMessage ? pickup.vMessage : 'No message'}</h6>
                </>
                }
                
                {pickup.status === 2 && 
                <>
                    {pickup.rating > 0 ? <div><ShowRating rating={pickup.rating} /></div> : <Rate handleClose={handleClose} pickup={pickup} pickups={pickups} setPickups={setPickups} />}
                </>}

                {/* {pickup.status === 1 && <div className="text-center">
                    <div className="btn btn-dark w-75" onClick={handleComplete}>
                        {isPending ? <Spinner animation='border' size="sm" />: 'Complete'}
                    </div>
                </div>} */}
                
            </Modal.Body>
        </Modal>
     );
}
 
export default PickupModal;