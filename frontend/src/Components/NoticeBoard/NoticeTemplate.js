import { mdiClockOutline, mdiClose, mdiImage, mdiShare } from "@mdi/js";
import Icon from "@mdi/react";
import { useState } from "react";
import { Modal } from "react-bootstrap";
import formatDate from "../Utils/DateTimeFormat";

const NoticeTemplate = ({notice}) => {
    const [showImage, setShowImage] = useState(false)

    const copyLink = () => {
        const link = `${window.location.host}/noticeboard/${notice._id}`
        navigator.clipboard.writeText(link)
    }

    return ( 
        <>
            <div className="card mt-4">
                <div className="card-body">
                    <div className="d-flex">
                        <h5 className="card-title me-auto">{notice.title}</h5>
                        <small className="text-muted">{formatDate(notice.createdAt)}</small>

                    </div>
                    <p className="card-text">{notice.description}</p>

                    {notice.date && <div>
                        <Icon size={1} path={mdiClockOutline} />
                        {formatDate(notice.date)}
                    </div>}

                    <div className="d-flex justify-content-end">
                        {notice.image && <div type="button" onClick={() => setShowImage(true)}><Icon size={1} path={mdiImage} /></div>}
                        <div className="ms-3" type="button" onClick={copyLink}>
                            <Icon size={1} path={mdiShare} />
                        </div>
                    </div>

                    <hr />
                    <div>
                        <h6>Contact Information</h6>
                        <div className="text-muted">
                            <div className="inline">
                                {`Organized by: `}
                                <strong>{notice.org}</strong>
                            </div>
                            <a href={`mailto:${notice.email}`}>{notice.email}</a>
                            {notice.website && <a href={notice.website} target="_blank" rel="noreferrer">{notice.website}</a>}
                        </div>
                    </div>
                </div>
            </div>
            {
                notice.image && 
                <Modal scrollable={true} show={showImage} onHide={() => setShowImage(false)} centered>
    
                        <div className="position-relative">
                            <div className="position-absolute top-0 end-0">
                                <div className="rounded-circle bg-white m-2 shadow p-1" type="button" onClick={() => setShowImage(false)}>
                                    <Icon size={1} path={mdiClose} />
                                </div>
                            </div>
                        </div>
                    <img src={notice.image} alt="notice" className="img-fluid rounded" />

                </Modal>
            }
            
        </>
        
     );
}
 
export default NoticeTemplate;