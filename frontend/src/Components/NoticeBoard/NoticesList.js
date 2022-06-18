import InfiniteScroll from 'react-infinite-scroll-component';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Loading from '../Utils/Loading';
import NoticeTemplate from './NoticeTemplate';

const NoticesList = ({ids, setIds, isPending, setIsPending}) => {

    const [notices, setNotices] = useState([])
    const [offset, setOffSet] = useState(0)
    const increment = 10

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API}/notice/?limit=200`)
            .then((Indexes) => {
                setIds(Indexes.data)
                if (Indexes.data.length){
                    handleLoadMore(Indexes.data)
                } else{
                    setIsPending(false)
                }
            })
            .catch((err) => console.log(err))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const handleLoadMore = (ids) => {
        let arr = ids.slice(offset, offset+increment).toString()
        if (arr) {
            axios.get(`${process.env.REACT_APP_API}/notice/?id=${arr}`, {withCredentials:true})
            .then((res) => {
                // console.log(post.data)
                let newNotices = [...notices, ...res.data]
                setNotices(newNotices)
                setOffSet(offset+increment)
                setIsPending(false)
            })
        }
         
        }

    return (
        <div>
            <Loading isPending={isPending}/>
            {!isPending && notices.length < 1 && <h6 className='text-center m-5'>Currently no announcements</h6> }
            <InfiniteScroll
                dataLength={notices.length}
                hasMore={true}
                next={() => handleLoadMore(ids)}>
                {
                    notices.map(notice => (
                        <div key={notice._id}>
                            <div>
                                <NoticeTemplate notice={notice} />
                            </div>
                        </div>
                    ))
                }

            </InfiniteScroll>
        </div>
    )
}

export default NoticesList;


