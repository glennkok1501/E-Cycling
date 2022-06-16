import { useState } from "react";
import { useSelector } from "react-redux";
import AddressModal from "../Address/AddressModal";
import formatDate from "../Utils/DateTimeFormat";

const Details = ({account}) => {

    const [showAddressModal, setShowAddressModal] = useState(false)
    const user = useSelector((state) => state.user.value)
    return ( 
        <>
            <div className="d-flex align-items-center">
                <div className="me-auto">
                    <h3>{account.username}</h3>
                    <h4>{account.email}</h4>
                    <small className="text-muted">{`Joined since ${formatDate(account.createdAt)}`}</small>
                </div>
                {user._id === account._id && <div className="btn btn-dark" onClick={() => setShowAddressModal(true)}>
                    Manage Addresses
                </div>}
            </div>
            {user._id === account._id && <AddressModal showAddressModal={showAddressModal} setShowAddressModal={setShowAddressModal} account={account} />}
        </>
        
     );
}
 
export default Details;