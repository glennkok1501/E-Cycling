import PickupTemplate from "./PickupTemplate";
import SelfPickupTemplate from "./SelfPickupTemplate";

const PickupList = ({pickups, setPickup, setShowPickupModal}) => {

    return ( 
        <div>
            {pickups.map((pickup) => (
                <div key={pickup._id}>
                    {pickup.self ?
                        <SelfPickupTemplate pickup={pickup} />
                     :
                        <PickupTemplate pickup={pickup} setPickup={setPickup} setShowPickupModal={setShowPickupModal} />}
                </div>
            ))}
        </div>
     );
}
 
export default PickupList;