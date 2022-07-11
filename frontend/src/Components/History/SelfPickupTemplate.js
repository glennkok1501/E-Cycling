import { mdiClockOutline } from "@mdi/js";
import Icon from "@mdi/react";
import formatDate from "../Utils/DateTimeFormat";

const SelfPickupTemplate = ({pickup}) => {
    return ( 
        <div className="card mb-4">
            <div className="card-body">
                <small className="text-muted d-flex align-items-center">
                    <div className="me-auto">
                        <Icon size={1} path={mdiClockOutline} />
                        {formatDate(pickup.createdAt)}
                    </div>
                    <strong className="text-muted">
                        Self-Pickup
                    </strong>
                </small>
                <div className="row">
                    <div className="col-4">
                        <img className="img-fluid rounded mt-2" src={pickup.userImage} />
                    </div>
                    <div className="col-8">
                        <div className="text-muted">
                            {`Earned: ${pickup.rating} points`}
                        </div>
                        <div>
                            <h7>{pickup.userMessage}</h7>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default SelfPickupTemplate;