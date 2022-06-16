import { mdiSendCircle } from "@mdi/js";
import Icon from "@mdi/react";
import axios from "axios";
import { useState } from "react";
import { useSelector } from "react-redux";

const CreateComment = ({postId, comments, setComments}) => {

    const [message, setMessage] = useState('')
    const user = useSelector((state) => state.user.value)

    const handleSubmit = () => {
        axios.post(`${process.env.REACT_APP_API}/post/comment/${postId}`, {body: message, username: user.username}, {withCredentials: true})
            .then((res) => {
                if (res.status === 200) {
                    setComments([res.data, ...comments])
                    setMessage('')
                }
            })
            .catch((err) => {
                console.log(err)
            })
    }

    return ( 
        <div className="input-group m-0">
            <input placeholder="Comment..." className="form-control border-white" type='text' onChange={(e) => setMessage(e.target.value)} value={message} />
            <div className="input-group-append d-flex align-items-center">
                <button onClick={handleSubmit} className="btn btn-default me-2 ms-1 p-0"><Icon path={mdiSendCircle} size={1.5} /></button>
            </div>
        </div>
     );
}
 
export default CreateComment;