import axios from "axios";
import { useState } from "react";
import { Modal, Spinner } from "react-bootstrap";
import CaptionSelection from "./CaptionSelection";
import ImageSelection from "./ImageSelection";

const CreateModal = ({showCreateModal, setShowCreateModal, feeds, setFeeds}) => {

    const [image, setImage] = useState(null)
    const [caption, setCaption] = useState('')
    const [isPending, setIsPending] = useState(false)

    const [selection, setSelection] = useState('image')
    const selections = {
        'image': <ImageSelection image={image} setImage={setImage} setSelection={setSelection} />,
        'caption': <CaptionSelection caption={caption} setCaption={setCaption} setSelection={setSelection}/>
    }

    const handleClose = () => {
        setShowCreateModal(false)
        setSelection('image')
        setImage(null)
        setCaption('')
        setIsPending(false)
    }

    const handleSubmit = () => {
        const formData = new FormData()
        formData.append('image', image)
        formData.append('caption', caption)

        setIsPending(true)

        axios.post(`${process.env.REACT_APP_API}/post/upload`, formData, {
            withCredentials: true,
            headers: {
                "Content-Type": "multipart/form-data"
            }
        })
            .then((res) => {
                if (res.status === 200) {
                    if (res.data.error) {
                        console.log(res.data.error)
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
        <Modal scrollable={true} show={showCreateModal} onHide={handleClose} centered fullscreen={'md-down'}>
            <Modal.Header><h5>Create a post</h5></Modal.Header>
            <Modal.Body>
                {selections[selection]}
            </Modal.Body>
            <Modal.Footer>
                <div className="btn btn-danger btn-sm" onClick={handleClose}>Discard</div>
                <div className={`btn btn-success btn-sm ${isPending | image === null | caption.length < 1 && 'disabled' }`}
                onClick={handleSubmit}>{isPending ? <Spinner animation='border' size="sm" />: 'Save'}</div>
            </Modal.Footer>
        </Modal>
     );
}
 
export default CreateModal;