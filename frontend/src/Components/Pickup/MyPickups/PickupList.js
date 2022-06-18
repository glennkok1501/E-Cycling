import PickupTemplate from "./PickupTemplate";

const PickupList = ({pickups, setPickup, setShowMyPickupModal}) => {

    return ( 
        <div>
            {pickups.map((pickup) => (
                <div key={pickup._id}>
                    <PickupTemplate pickup={pickup} setPickup={setPickup} setShowMyPickupModal={setShowMyPickupModal} />
                </div>
            ))}
            {pickups.length === 0 && <h6 className='text-center m-5'>There are currently no pickups</h6>}

        </div>
     );
}
 
export default PickupList;