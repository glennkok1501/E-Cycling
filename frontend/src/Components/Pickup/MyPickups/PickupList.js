import PickupTemplate from "./PickupTemplate";

const PickupList = ({pickups, setPickup, setShowMyPickupModal}) => {

    return ( 
        <div>
            {pickups.map((pickup) => (
                <div key={pickup._id}>
                    <PickupTemplate pickup={pickup} setPickup={setPickup} setShowMyPickupModal={setShowMyPickupModal} />
                </div>
            ))}
        </div>
     );
}
 
export default PickupList;