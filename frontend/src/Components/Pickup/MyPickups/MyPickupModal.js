import axios from "axios";
import { useState } from "react";
import { Modal, Spinner } from "react-bootstrap";
import Error from "../../Utils/Error";
import ImageSelect from "../../Utils/ImageSelect";

const MyPickupModal = ({pickup, pickups, setPickups, showMyPickupModal, setShowMyPickupModal}) => {

    const MAX_LENGTH = 256

    const [error, setError] = useState('')
    const [isPending, setIsPending] = useState(false)

    const [image, setImage] = useState(null)
    const [message, setMessage] = useState('')

    const handleClose = () => {
        setError('')
        setShowMyPickupModal(false)
        setIsPending(false)
        setImage(null)
        setMessage('')
    }    

    const handleComplete = () => {
        setError('')

        if (image === null) {
            setError('Please select an image')
            return
        }

        const formData = new FormData()
        formData.append("image", image)
        formData.append("pickupId", pickup._id)
        formData.append("message", message)

        setIsPending(true)
        axios.put(`${process.env.REACT_APP_API}/pickup/complete`, formData, {
            withCredentials: true,
            headers: {
                "Content-Type": "multipart/form-data"
            }})
            .then((res) => {
                if (res.status === 200) {
                    if (res.data.error) {
                        setError(res.data.error)
                        setIsPending(false)
                    }
                    else {
                        setPickups(pickups.map((p) => p._id === pickup._id ? {...p, status: 2} : p))
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
        <Modal scrollable={true} show={showMyPickupModal} onHide={handleClose} centered fullscreen={'md-down'}>
            <Modal.Header closeButton>
                <h5>Details</h5>
            </Modal.Header>
            <Modal.Body>
                <Error error={error} />
                <img src={pickup.userImage} className="img-fluid rounded w-100" alt="user"/>
                <div className="mt-3">
                    <h6>{pickup.userMessage ? pickup.userMessage : 'No message'}</h6>
                </div>

                <hr />

                <h5>Completion</h5>
                {pickup.status === 1 ? <ImageSelect image={image} setImage={setImage} /> :
                <img src={pickup.vImage} className="img-fluid rounded w-100" alt="user"/>}
                
                <div className="mt-3">
                    {pickup.status === 1 ? 
                    <>
                        <textarea type='text' rows={5} maxLength={MAX_LENGTH} className="h-50 form-control" value={message} placeholder="Write a message..." onChange={(e) => setMessage(e.target.value)}/>
                        <div className="text-end text-muted">{`${message.length}/${MAX_LENGTH}`}</div>
                    </> :
                    <h6>{pickup.vMessage ? pickup.vMessage : 'No message'}</h6>}
                </div>

                {pickup.rating > 0 && <div>{pickup.rating}</div>}

                {pickup.status === 1 && <div className="text-center">
                    <div className="btn btn-dark w-75" onClick={handleComplete}>
                        {isPending ? <Spinner animation='border' size="sm" />: 'Complete'}
                    </div>
                </div>}
                
            </Modal.Body>
        </Modal>
     );
}
 
export default MyPickupModal;