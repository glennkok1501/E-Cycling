import { mdiCheck, mdiClose } from "@mdi/js";
import Icon from "@mdi/react";
import axios from "axios";
import { useState } from "react";
import { Modal, Spinner } from "react-bootstrap";
import Error from "../../Utils/Error";
import Username from "../Username";

const AllPickupModal = ({pickup, pickups, setPickups, showAllPickupModal, setShowAllPickupModal}) => {

    const [error, setError] = useState('')
    const [isPending, setIsPending] = useState(false)

    const handleClose = () => {
        setError('')
        setShowAllPickupModal(false)
        setIsPending(false)
    }    

    const handleAccept = () => {
        setError('')
        setIsPending(true)
        axios.put(`${process.env.REACT_APP_API}/pickup/accept`, {pickupId: pickup._id}, {withCredentials: true})
            .then((res) => {
                if (res.status === 200) {
                    if (res.data.error) {
                        setError(res.data.error)
                        setIsPending(false)
                    }
                    else {
                        setPickups(pickups.filter((p) => p._id !== pickup._id))
                        handleClose()
                    }
                    
                }
            })
            .catch((err) => {
                console.log(err)
                handleClose()
            })
    }

    return ( 
        <Modal scrollable={true} show={showAllPickupModal} onHide={handleClose} centered fullscreen={'md-down'}>
            <Modal.Body>
                <Error error={error} />
                <Username user={pickup.UserId} />
                <img src={pickup.userImage} className="img-fluid rounded w-100" alt="user"/>
                <div className="mt-3">
                    <h6>{pickup.userMessage ? pickup.userMessage : 'No message'}</h6>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <div className="btn btn-danger btn-sm" onClick={handleClose}>
                    <Icon size={0.8} path={mdiClose} />Close
                </div>
                <div className="btn btn-success btn-sm" onClick={handleAccept}>
                {isPending ? <Spinner animation='border' size="sm" />: <div><Icon size={0.8} path={mdiCheck} />Accept</div>}
                </div>
            </Modal.Footer>
        </Modal>
     );
}
 
export default AllPickupModal;