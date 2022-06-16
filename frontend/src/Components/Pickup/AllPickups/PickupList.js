import PickupTemplate from "./PickupTemplate";

const PickupList = ({pickups, setPickup, setShowAllPickupModal}) => {

    return ( 
        <div>
            {pickups.map((pickup) => (
                <div key={pickup._id}>
                    <PickupTemplate pickup={pickup} setPickup={setPickup} setShowAllPickupModal={setShowAllPickupModal} />
                </div>
            ))}
        </div>
     );
}
 
export default PickupList;