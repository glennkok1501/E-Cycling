import axios from "axios";
import { useState } from "react";
import { Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { setShowPostModal } from "../../../redux/features/postSlice";
import Loading from "../../Utils/Loading";
import CommentsList from "../Comment/CommentsList";
import CreateComment from "../Comment/CreateComment";

const PostModal = () => {

    const dispatch = useDispatch()
    const post = useSelector((state) => state.post)
    const [comments, setComments] = useState([])
    const [isPending, setIsPending] = useState(true)

    const handleClose = () => {
        dispatch(setShowPostModal({post: null, show: false}))
    }

    const handleLoadComments = () => {
        axios.get(`${process.env.REACT_APP_API}/post/?id=${post.current._id}`, {withCredentials: true})
            .then((res) => {
                if (res.status === 200) {
                    setComments(res.data[0].comments)
                    setIsPending(false)
                }
            })
            .catch((err) => {
                console.log(err)
                setIsPending(false)
            })
    }

    return ( 
        <Modal scrollable={true} onShow={handleLoadComments} show={post.showPostModal} onHide={handleClose} centered fullscreen={'md-down'}>
            <Modal.Header closeButton>
                <h5>{post.current.UserId.username}</h5>
            </Modal.Header>
            <Modal.Body>
                <h6>
                    {post.current.caption}
                </h6>
                <hr />
                <div style={{"height": "650px", "overflow": "auto"}}>
                    {isPending ? <Loading isPending={isPending} /> : <CommentsList comments={comments} />}
                </div>
            </Modal.Body>
            <Modal.Footer className="p-0">
                <CreateComment postId={post.current._id} comments={comments} setComments={setComments} />
            </Modal.Footer>
        </Modal>
     );
}
 
export default PostModal;