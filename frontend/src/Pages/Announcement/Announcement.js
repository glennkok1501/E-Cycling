import axios from "axios";
import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Verify from "../../Components/Auth/Verify";
import DefaultNavBar from "../../Components/NoticeBoard/DefaultNavBar";
import NoticeTemplate from "../../Components/NoticeBoard/NoticeTemplate";

const Announcement = () => {

    const id = useParams().id
    const [details, setDetails] = useState(null)
    const [isPending, setIsPending] = useState(true)

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API}/notice/?id=${id}`)
            .then((res) => {
                if (res.status === 200) {
                    setDetails(res.data[0])
                    setIsPending(false)
                }
            })
            .catch((err) => {
                console.log(err)
            })
    }, [id])

    return ( 
        <div>
            <DefaultNavBar />
            <Container>
                <div className="contents">
                    {
                        isPending ? <Verify /> :
                        <div className="row">
                            <div className="col-md-8 offset-md-2">
                                <NoticeTemplate notice={details} />
                            </div>
                        </div>
                    }
                    
                </div>
            </Container>
        </div>
     );
}
 
export default Announcement;