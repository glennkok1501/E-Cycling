import CommentTemplate from "./CommentTemplate";

const CommentsList = ({comments}) => {
    return ( 
        <div>
            {
                comments.length > 0 ? 
                    <div>
                        {
                            comments.map((comment) => (
                                <div className="comment" key={comment._id}>
                                    <CommentTemplate comment={comment}/>
                                </div>
                            ))
                        }
                    </div>
                :
                <h6 className="text-center m-5">No Comments</h6>
            }
        </div>
     );
}
 
export default CommentsList;