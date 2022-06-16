import InfiniteScroll from 'react-infinite-scroll-component';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Loading from '../../Utils/Loading';
import PostTemplate from './PostTemplate';
import PostModal from './PostModal';
import { useSelector } from 'react-redux';

const PostsList = () => {

    const [posts, setPosts] = useState([])
    const [isPending, setIsPending] = useState(true)
    const [postIds, setPostIds] = useState([])
    const [offset, setOffSet] = useState(0)
    const increment = 10

    const [showPostModal, setShowPostModal] = useState(false)
    const currentPost = useSelector((state) => state.post.current)

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API}/post/?limit=200`, {withCredentials:true})
            .then((Indexes) => {
                setPostIds(Indexes.data)
                if (Indexes.data.length){
                    handleLoadMore(Indexes.data)
                } else{
                    setIsPending(false)
                }
            })
            .catch((err) => console.log(err))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const handleLoadMore = (postIds) => {
        let arr = postIds.slice(offset, offset+increment).toString()
        if (arr) {
            axios.get(`${process.env.REACT_APP_API}/post/?id=${arr}`, {withCredentials:true})
            .then((post) => {
                // console.log(post.data)
                let newPosts = [...posts, ...post.data]
                setPosts(newPosts)
                setOffSet(offset+increment)
                setIsPending(false)
            })
        }
         
        }

    return (
        <div>
            <Loading isPending={isPending}/>
            {!isPending && posts.length < 1 && <h6 className='text-center m-5'>No available posts</h6> }
            <InfiniteScroll
                dataLength={posts.length}
                hasMore={true}
                next={() => handleLoadMore(postIds)}>
                {
                    posts.map(post => (
                        <div key={post._id}>
                            <PostTemplate post={post} />
                        </div>
                    ))
                }

            </InfiniteScroll>
            {currentPost && <PostModal showPostModal={showPostModal} setShowPostModal={setShowPostModal} post={currentPost} />}
        </div>
    )
}

export default PostsList;


