import axios from "axios";
import { useState } from "react";
import { Modal, Spinner } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Error from "../../Utils/Error";
import ImageSelect from "../../Utils/ImageSelect";

const SelfPickupModal = ({showModal, setShowModal}) => {
    
    const MAX_LENGTH = 256

    const [image, setImage] = useState(null)
    const [message, setMessage] = useState('')

    const [isChecked, setIsChecked] = useState(false)
    const [error, setError] = useState('')
    const [isPending, setIsPending] = useState(false)

    const handleClose = () => {
        setShowModal(false)
        setIsPending(false)
        setError('')
        setImage(null)
        setMessage('')
    }

    const handleSubmit = () => {
        setError('')
        if (image === null) {
            setError('Please select an image')
            return
        }

        setIsPending(true)

        const formData = new FormData()
        formData.append("image", image)
        formData.append("message", message)

        axios.post(`${process.env.REACT_APP_API}/pickup/self`, formData, {
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
                        handleClose()
                    }
                }
            })
            .catch((err) => {
                console.log(err)
                setIsPending(false)
            })
    }

    return ( 
        <Modal scrollable={true} show={showModal} onHide={handleClose} centered fullscreen={'md-down'}>
            <Modal.Header closeButton>
                <h5>Create a self-pickup (x1.5 points)</h5>
            </Modal.Header>
            <Modal.Body>

                <Error error={error} />
                
                <div className="text-center">
                    <small className="text-muted">Please ensure that your image is clear as it will be processed by our AI</small>
                </div>
                
                <ImageSelect image={image} setImage={setImage} />

                <div className="mt-3">
                    <textarea type='text' rows={5} maxLength={MAX_LENGTH} className="h-50 form-control" value={message} placeholder="Write a message..." onChange={(e) => setMessage(e.target.value)}/>
                    <div className="text-end text-muted">{`${message.length}/${MAX_LENGTH}`}</div>
                </div>

                <div className="form-check">
                    <input className="form-check-input" type="checkbox" checked={isChecked} onChange={(e) => setIsChecked(!isChecked)}  />
                    <label className="form-check-label">
                        I have acknowledged and adhered to following <Link className="text-info" to="/guidelines">guidelines</Link> provided
                    </label>
                </div>

                <div className="text-center mt-3">
                    <div className={`btn btn-secondary w-75 ${isPending | !isChecked && 'disabled'}`} onClick={handleSubmit}>
                    {isPending ? <Spinner animation='border' size="sm" />: 'Create'}
                    </div>
                </div>
                <div className="text-center">
                    <small className="text-muted">Created pickups will be shown under Account History</small>
                </div>
            </Modal.Body>
        </Modal>
     );
}
 
export default SelfPickupModal;