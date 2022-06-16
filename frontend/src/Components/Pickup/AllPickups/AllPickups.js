import axios from "axios";
import { useEffect, useState } from "react";
import Loading from "../../Utils/Loading";
import AllPickupModal from "./AllPickupModal";
import CreatePickupModal from "./CreatePickupModal";
import PickupList from "./PickupList";

const AllPickups = () => {

    const [showModal, setShowModal] = useState(false)
    const [pickups, setPickups] = useState([])
    const [isPending, setIsPending] = useState(true)
    const [showAllPickupModal, setShowAllPickupModal] = useState(false)
    const [pickup, setPickup] = useState(null)

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API}/pickup/all`, {withCredentials: true})
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
                <div>
                    <div className="d-flex justify-content-end" onClick={() => setShowModal(true)}>
                        <div className="btn btn-dark">
                            Start a pickup
                        </div>
                    </div>

                    <div className="mt-4">
                        <PickupList pickups={pickups} setPickup={setPickup} setShowAllPickupModal={setShowAllPickupModal} />

                    </div>


                </div>
            {pickup && <AllPickupModal pickup={pickup} pickups={pickups} setPickups={setPickups} showAllPickupModal={showAllPickupModal} setShowAllPickupModal={setShowAllPickupModal} />}
            <CreatePickupModal showModal={showModal} setShowModal={setShowModal} />
            </>
            }
            
        </>
        
     );
}
 
export default AllPickups;