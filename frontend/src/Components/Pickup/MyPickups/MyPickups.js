import axios from "axios"
import { useEffect, useState } from "react"
import Loading from "../../Utils/Loading"
import MyPickupModal from "./MyPickupModal"
import PickupList from "./PickupList"

const MyPickups = () => {

    const [pickups, setPickups] = useState([])
    const [isPending, setIsPending] = useState(true)
    const [showMyPickupModal, setShowMyPickupModal] = useState(false)
    const [pickup, setPickup] = useState(null)

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
                <div className="mt-4">
                    <PickupList pickups={pickups} setPickup={setPickup} setShowMyPickupModal={setShowMyPickupModal} />
                </div>

            {pickup && <MyPickupModal pickup={pickup} pickups={pickups} setPickups={setPickups} showMyPickupModal={showMyPickupModal} setShowMyPickupModal={setShowMyPickupModal} />}
            </>
            }
            
        </>
     );
}
 
export default MyPickups;