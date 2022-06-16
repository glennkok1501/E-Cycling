import PickupTemplate from "./PickupTemplate";

const PickupList = ({pickups, setPickup, setShowPickupModal}) => {

    return ( 
        <div>
            {pickups.map((pickup) => (
                <div key={pickup._id}>
                    <PickupTemplate pickup={pickup} setPickup={setPickup} setShowPickupModal={setShowPickupModal} />
                </div>
            ))}
        </div>
     );
}
 
export default PickupList;