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
    const [datetime, setDatetime] = useState('')

    const handleClose = () => {
        setError('')
        setShowAllPickupModal(false)
        setIsPending(false)
        setDatetime('')
    }    

    const handleAccept = () => {
        setError('')
        setIsPending(true)
        axios.put(`${process.env.REACT_APP_API}/pickup/accept`, {pickupId: pickup._id, datetime: datetime}, {withCredentials: true})
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

    const handleLoadTime = (time) => {
        const date = new Date(new Date().getTime() + time * 60000)

        const currentdate = `${date.getFullYear()}-${('0' + (date.getMonth()+1)).slice(-2)}-${('0' + date.getDate()).slice(-2)}T${('0' + date.getHours()).slice(-2)}:${('0' + date.getMinutes()).slice(-2)}`
        setDatetime(currentdate)
    }

    const loadTimings = (timings) => {
        return (
            <div className="row">
                {
                    timings.map((time) => (
                        <div className="col-3" key={time}>
                            <div type="button" className="border text-center bg-secondary rounded-pill text-white p-1 m-2"
                            onClick={() => handleLoadTime(time)}>
                                {time >= 60 ? <div>{`${Math.floor(time/60)} hour`}</div>: <div>{`${time} min`}</div>}

                            </div>
                        </div>
                    ))
                }
                
            </div>
        )
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
                {loadTimings([10, 20, 30, 60])}
                <input type='datetime-local' className="form-control" value={datetime} onChange={(e) => setDatetime(e.target.value)}/>
            </Modal.Body>
            <Modal.Footer>
                <div className="btn btn-danger btn-sm" onClick={handleClose}>
                    <Icon size={0.8} path={mdiClose} />Close
                </div>
                <div className={`btn btn-success btn-sm ${datetime === '' && 'disabled'}`} onClick={handleAccept}>
                    {isPending ? <Spinner animation='border' size="sm" />: <div><Icon size={0.8} path={mdiCheck} />Accept</div>}
                </div>
            </Modal.Footer>
        </Modal>
     );
}
 
export default AllPickupModal;