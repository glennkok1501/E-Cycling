import axios from "axios";
import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Details from "../../Components/Account/Details";
import Posts from "../../Components/Account/Posts";
import NavBar from "../../Components/NavBar/NavBar";
import Loading from "../../Components/Utils/Loading";

const Account = () => {
    const userId = useParams().id

    const [account, setAccount] = useState(null)
    const [isPending, setIsPending] = useState(true)

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API}/user/${userId}`, {withCredentials: true})
            .then((res) => {
                if (res.status === 200) {
                    setAccount(res.data)
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
            <NavBar />
            <Container>
                <div className="contents">
                    <Loading isPending={isPending} />
                    {account && <Details account={account} />}

                    <hr />

                    <Posts userId={userId} />
                </div>
            </Container>
            
        </div>
     );
}
 
export default Account;