import axios from "axios";
import { useState } from "react";
import { Modal, Spinner } from "react-bootstrap";
import { useSelector } from "react-redux";
import Error from "../../Utils/Error";
import ImageSelect from "../../Utils/ImageSelect";

const CreatePickupModal = ({showModal, setShowModal}) => {
    
    const MAX_LENGTH = 256

    const user = useSelector((state) => state.user.value)
    const [image, setImage] = useState(null)
    const [message, setMessage] = useState('')
    const [address, setAddress] = useState('')

    const [error, setError] = useState('')
    const [isPending, setIsPending] = useState(false)

    const handleClose = () => {
        setShowModal(false)
        setIsPending(false)
        setError('')
        setImage(null)
        setMessage('')
        setAddress('')
    }

    const handleSubmit = () => {
        setError('')
        if (image === null) {
            setError('Please select an image')
            return
        }

        if (address.length === 0) {
            setError('Please select an address')
            return
        }

        setIsPending(true)

        const formData = new FormData()
        formData.append("image", image)
        formData.append("message", message)
        for (var i = 0; i < user.addresses.length; i++) {
            if (user.addresses[i].name === address) {
                formData.append("address", JSON.stringify(user.addresses[i]))
                break
            }
        }

        axios.post(`${process.env.REACT_APP_API}/pickup`, formData, {
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
                <h5>Create a pickup</h5>
            </Modal.Header>
            <Modal.Body>

                <Error error={error} />

                <ImageSelect image={image} setImage={setImage} />
                
                <select className="form-select" value={address} onChange={(e) => setAddress(e.target.value)}>
                    <option>Address...</option>
                    {user.addresses.map((a) => (
                        <option key={a.name} value={a.name}>{a.name}</option>
                    ))}
                </select>

                <div className="mt-3">
                    <textarea type='text' rows={5} maxLength={MAX_LENGTH} className="h-50 form-control" value={message} placeholder="Write a message..." onChange={(e) => setMessage(e.target.value)}/>
                    <div className="text-end text-muted">{`${message.length}/${MAX_LENGTH}`}</div>
                </div>

                <div className="text-center">
                    <div className={`btn btn-dark w-75 ${isPending && 'disabled'}`} onClick={handleSubmit}>
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
 
export default CreatePickupModal;