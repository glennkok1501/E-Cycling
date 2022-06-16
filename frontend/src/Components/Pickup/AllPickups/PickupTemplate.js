import { mdiClockOutline, mdiMapMarker } from "@mdi/js";
import Icon from "@mdi/react";
import formatDate from "../../Utils/DateTimeFormat";

const PickupTemplate = ({pickup, setPickup, setShowAllPickupModal}) => {
    const address = JSON.parse(pickup.address)
    const handleSet = () => {
        setPickup(pickup)
        setShowAllPickupModal(true)
    }

    return ( 
        <div className="card">
            <div className="card-body">
                <div onClick={handleSet}>
                    <small className="text-muted d-flex align-items-center">
                        <div>
                            <Icon size={1} path={mdiClockOutline} />
                            {formatDate(pickup.createdAt)}
                        </div>
                        
                    </small>

                    <div className="d-flex align-items-center mt-3">
                        <div>
                            <Icon size={1} path={mdiMapMarker} />
                            {address.address}
                            <br />
                            <strong className="ms-4">S{address.postalCode}</strong>
                        </div>
                    </div>
                </div>
                

                <div className="d-flex justify-content-end">
                    <a href={`https://google.com/maps/place/Singapore+${address.postalCode}`} target="_blank" rel="noreferrer">
                        Open in Google Maps
                    </a>
                </div>
            </div>

        </div>
     );
}
 
export default PickupTemplate;