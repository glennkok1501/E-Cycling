import axios from "axios"
import { useEffect, useState } from "react"
import Loading from "../../Utils/Loading"
import SelfPickupModal from "./SelfPickupModal"
import MyPickupModal from "./MyPickupModal"
import PickupList from "./PickupList"

const MyPickups = () => {

    const [pickups, setPickups] = useState([])
    const [isPending, setIsPending] = useState(true)
    const [showMyPickupModal, setShowMyPickupModal] = useState(false)
    const [pickup, setPickup] = useState(null)
    const [showModal, setShowModal] = useState(false)

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API}/pickup/`, {withCredentials: true})
            .then((res) => {
                if (res.status === 200) {
                    setPickups(res.data)
                    setIsPending(false)
                }
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    return ( 
        <>
            <Loading isPending={isPending}/>
            {!isPending && 
            <>
            <div>
                    <div className="d-flex justify-content-end" onClick={() => setShowModal(true)}>
                        <div className="btn btn-secondary">
                            Self-Pickup
                        </div>
                    </div>

                    <div className="mt-4">
                        <PickupList pickups={pickups} setPickup={setPickup} setShowMyPickupModal={setShowMyPickupModal} />

                    </div>


                </div>
            <SelfPickupModal showModal={showModal} setShowModal={setShowModal}/>
            {pickup && <MyPickupModal pickup={pickup} pickups={pickups} setPickups={setPickups} showMyPickupModal={showMyPickupModal} setShowMyPickupModal={setShowMyPickupModal} />}
            </>
            }
            
        </>
     );
}
 
export default MyPickups;