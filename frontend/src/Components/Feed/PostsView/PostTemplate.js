import { mdiCommentOutline } from "@mdi/js";
import Icon from "@mdi/react";
import formatDate from "../../Utils/DateTimeFormat";

const PostTemplate = ({post}) => {
    
    return ( 
        <div className="card mb-4">
            <div className="card-body">
                <div className="d-flex inline align-items-center">
                    <strong className="me-auto">{post.UserId.username}</strong>
                    <div className="text-muted">{formatDate(post.createdAt)}</div>
                </div>

                <span className="d-inline-block text-truncate w-100 text-lg mt-3">
                    {post.caption}
                </span>

                <div className="text-center mt-3 mb-3">
                    <img className="img-fluid w-100 rounded" loading="lazy" src={post.image} alt="post" />
                </div>

                <small className="text-muted">
                    <Icon size={0.8} path={mdiCommentOutline} />
                    <span className="ms-1">
                        {post.comments.length}
                        {` Commments`}
                    </span>
                </small>
                
            </div>
        </div>
     );
}
 
export default PostTemplate;