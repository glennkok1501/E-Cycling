import { useState } from "react";
import { Modal } from "react-bootstrap";
import AddressList from "./AddressList";
import CreateAddress from "./CreateAddress";

const AddressModal = ({showAddressModal, setShowAddressModal, account}) => {

    const [addresses, setAddresses] = useState(account.addresses)

    const handleClose = () => {
        setShowAddressModal(false)
    }

    return ( 
        <Modal scrollable={true} show={showAddressModal} onHide={handleClose} centered fullscreen={'md-down'}>
            <Modal.Header closeButton>
                <h5>Addresses</h5>
            </Modal.Header>
            
            <Modal.Body>

                <CreateAddress addresses={addresses} setAddresses={setAddresses} />
                <div className="mt-3">
                <AddressList addresses={addresses} setAddresses={setAddresses} />

                </div>
                
            </Modal.Body>
                
                
        </Modal>
     );
}
 
export default AddressModal;