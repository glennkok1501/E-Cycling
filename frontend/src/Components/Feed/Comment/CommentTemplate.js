import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import formatDate from '../../Utils/DateTimeFormat'

const CommentTemplate = ({comment}) => {
    const dispatch = useDispatch()
    
    return (
        <div className="d-flex mb-4">
            <div className="flex-grow-1 ms-3">
                <b>{comment.username}</b>
                <i className='ms-2 me-2 text-muted'>&#8226;</i>
                <small>{formatDate(comment.createdAt)}</small>
                <br />
                <p className='text-break m-0'>
                    {comment.body}
                </p>
            </div>
        </div>
    )
}

export default CommentTemplate