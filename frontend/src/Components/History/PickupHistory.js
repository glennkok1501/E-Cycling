import axios from "axios"
import { useEffect, useState } from "react"
import Loading from "../Utils/Loading"
import PickupList from "./PickupList"
import PickupModal from "./PickupModal"

const PickupHistory = () => {
    const [pickups, setPickups] = useState([])
    const [isPending, setIsPending] = useState(true)
    const [showPickupModal, setShowPickupModal] = useState(false)
    const [pickup, setPickup] = useState(null)

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API}/pickup/history`, {withCredentials: true})
            .then((res) => {
                if (res.status === 200) {
                    setPickups(res.data)
                    setIsPending(false)
                    console.log(res.data)
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
                    <PickupList pickups={pickups} setPickup={setPickup} setShowPickupModal={setShowPickupModal} />
                </div>

            {pickup && <PickupModal pickup={pickup} pickups={pickups} setPickups={setPickups} showPickupModal={showPickupModal} setShowPickupModal={setShowPickupModal} />}
            </>
            }
            
        </>
     );
}
 
export default PickupHistory;