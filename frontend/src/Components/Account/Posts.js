import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import PostModal from "../Feed/PostsView/PostModal";
import PostTemplate from "../Feed/PostsView/PostTemplate";
import Loading from "../Utils/Loading";

const Posts = ({userId}) => {

    const [posts, setPosts] = useState([])
    const [isPending, setIsPending] = useState(true)
    const currentPost = useSelector((state) => state.post.current)

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API}/post/user/${userId}`, {withCredentials: true})
            .then((res) => {
                if (res.status === 200) {
                    setPosts(res.data)
                    setIsPending(false)
                }
            })
            .catch((err) => {
                console.log(err)
                setIsPending(false)

            })
    }, [userId])

    return ( 
        <div>
            <Loading isPending={isPending} />
            {!isPending && posts.length === 0 && <h5 className="text-center m-5">No posts yet</h5>}
                <div className="row">
                {
                    posts.map((post) => (
                        <div className="col-lg-4" key={post._id}>
                            <PostTemplate post={post} />
                        </div>
                    ))
                }       
                </div>

            {currentPost && <PostModal />}

        </div>
     );
}
 
export default Posts;