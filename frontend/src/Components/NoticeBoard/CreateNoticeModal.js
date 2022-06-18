import axios from "axios";
import { useState } from "react";
import { Button, Modal, Spinner } from "react-bootstrap";
import Error from "../Utils/Error";
import ImageSelect from "../Utils/ImageSelect";

const CreateNoticeModal = ({showCreateModal, setShowCreateModal}) => {

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [image, setImage] = useState(null)
    const [org, setOrg] = useState('')
    const [email, setEmail] = useState('')
    const [website, setWebsite] = useState('')
    const [date, setDate] = useState('')
    const [isPending, setIsPending] = useState(false)

    const [error, setError] = useState('')

    const handleClose = () => {
        setShowCreateModal(false)
        setTitle('')
        setDescription('')
        setImage(null)
        setOrg('')
        setEmail('')
        setWebsite('')
        setError('')
    }

    const MAX_TITLE = 32
    const MAX_DESCRIPTION = 512

    const handleSubmit = (e) => {
        e.preventDefault()
        setIsPending(true)

        const formData = new FormData()
        formData.append("title", title)
        formData.append("description", description)
        formData.append("image", image)
        formData.append("org", org)
        formData.append("email", email)
        formData.append("website", website)
        formData.append("date", date)

        axios.post(`${process.env.REACT_APP_API}/notice/upload`, formData, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        })
            .then((res) => {
                if (res.status === 200) {
                    if (res.data.error) {
                        setError(res.data.error)
                        setIsPending(false)
                    }
                    else {
                        console.log(res.data)
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
            <Modal.Header closeButton>
                <h5>Announcement</h5>
            </Modal.Header>
            <Modal.Body>
                <Error error={error} />
                <form onSubmit={(e) => handleSubmit(e)}>
                    <div className="mb-3">
                        <label className="form-label">Title</label>
                        <input type='text' maxLength={MAX_TITLE} className="form-control" value={title} onChange={(e) => setTitle(e.target.value)} required/>
                        <div className="text-end text-muted">{`${title.length}/${MAX_TITLE}`}</div>
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Description</label>
                        <textarea type='text' rows={5} maxLength={MAX_DESCRIPTION} className="h-50 form-control" value={description} onChange={(e) => setDescription(e.target.value)} required/>
                        <div className="text-end text-muted">{`${description.length}/${MAX_DESCRIPTION}`}</div>
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Date of event</label>
                        <input type='date' className="form-control" value={date} onChange={(e) => setDate(e.target.value)}/>
                    </div>

                    <div className="mb-3">
                        <ImageSelect image={image} setImage={setImage} />
                    </div>

                    <hr />

                    <h5>Contact Information</h5>

                    <div className="mb-3">
                        <label className="form-label">Organization</label>
                        <input type='text' className="form-control" value={org} onChange={(e) => setOrg(e.target.value)} required/>
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Email Address</label>
                        <input type='email' className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} required/>
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Website</label>
                        <input type='text' className="form-control" value={website} onChange={(e) => setWebsite(e.target.value)}/>
                    </div>
                    
                    <div className="text-center">
                        <Button variant="dark" className="w-100" type="submit">
                        {isPending ? <Spinner animation='border' size="sm" />: 'Submit'}
                        </Button>
                    </div>
                    
                </form>
            </Modal.Body>
        </Modal>
     );
}
 
export default CreateNoticeModal;