import { mdiClockOutline, mdiMapMarker } from "@mdi/js";
import Icon from "@mdi/react";
import formatDate from "../../Utils/DateTimeFormat";

const PickupTemplate = ({pickup, setPickup, setShowMyPickupModal}) => {
    const address = JSON.parse(pickup.address)
    const handleSet = () => {
        setPickup(pickup)
        setShowMyPickupModal(true)
    }

    return ( 
        <div className="card mb-4">
            <div className="card-body">
                <div onClick={handleSet}>
                    <small className="text-muted d-flex align-items-center">
                        <div className="me-auto">
                            <Icon size={1} path={mdiClockOutline} />
                            {formatDate(pickup.createdAt)}
                        </div>
                        <strong className={pickup.status === 1 ? 'text-danger' : 'text-success'}>
                            {pickup.status === 1 ? 'In Progress' : 'Completed'}
                        </strong>
                        
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