import { mdiCommentOutline } from "@mdi/js";
import Icon from "@mdi/react";
import { useDispatch } from "react-redux";
import formatDate from "../../Utils/DateTimeFormat";
import { setShowPostModal } from "../../../redux/features/postSlice";
import { Link } from "react-router-dom";

const PostTemplate = ({post}) => {
    const dispatch = useDispatch()

    return ( 
        <div className="card mb-4">
            <div className="card-body">
                <div className="d-flex inline align-items-center">
                    <Link className="text-decoration-none me-auto text-black" to={`/account/${post.UserId._id}`}>
                        <strong>{post.UserId.username}</strong>
                    </Link>
                    <div className="text-muted">{formatDate(post.createdAt)}</div>
                </div>

                <span className="d-inline-block text-truncate w-100 text-lg mt-3">
                    {post.caption}
                </span>

                <div className="text-center mt-3 mb-3">
                    <img className="img-fluid w-100 rounded" loading="lazy" src={post.image} alt="post" />
                </div>

                <small className="text-muted btn" onClick={() => dispatch(setShowPostModal({post, show: true}))}>
                    <Icon size={0.8} path={mdiCommentOutline} />
                    <span className="ms-1">
                        {post.comments.length}
                        {` Comments`}
                    </span>
                </small>
                
            </div>
        </div>
     );
}
 
export default PostTemplate;