import { useState } from "react";
import { useSelector } from "react-redux";
import AddressModal from "../Address/AddressModal";
import formatDate from "../Utils/DateTimeFormat";

const Details = ({account}) => {

    const [showAddressModal, setShowAddressModal] = useState(false)
    const user = useSelector((state) => state.user.value)
    return ( 
        <>
            <div className="row">
                <div className="col-8">
                    <h3>{account.username}</h3>
                    <h4>{account.email}</h4>
                    <small className="text-muted">{`Joined since ${formatDate(account.createdAt)}`}</small>
                    <h5 className="text-secondary mt-2"><strong>Points: {account.points}</strong></h5>
                </div>

                <div className="col-4">
                    {user._id === account._id && 
                    <div className="text-end">
                    <div className="btn btn-secondary" onClick={() => setShowAddressModal(true)}>
                        Manage Addresses
                    </div>
                    </div>}
                    
                    
                </div>
                
            </div>
            {user._id === account._id && <AddressModal showAddressModal={showAddressModal} setShowAddressModal={setShowAddressModal} account={account} />}
        </>
        
     );
}
 
export default Details;