import { useState } from "react";
import AddressModal from "../Address/AddressModal";
import formatDate from "../Utils/DateTimeFormat";

const Details = ({account}) => {

    const [showAddressModal, setShowAddressModal] = useState(false)

    return ( 
        <>
            <div className="d-flex align-items-center">
                <div className="me-auto">
                    <h3>{account.username}</h3>
                    <h4>{account.email}</h4>
                    <small className="text-muted">{`Joined since ${formatDate(account.createdAt)}`}</small>
                </div>
                <div className="btn btn-dark" onClick={() => setShowAddressModal(true)}>
                    Manage Addresses
                </div>
            </div>
            <AddressModal showAddressModal={showAddressModal} setShowAddressModal={setShowAddressModal} account={account} />
        </>
        
     );
}
 
export default Details;