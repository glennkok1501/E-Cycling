import AddressTemplate from "./AddressTemplate";

const AddressList = ({addresses, setAddresses}) => {
    return ( 
        <div>
            {
                addresses.map((address) => (
                    <div key={address.name}>
                        <AddressTemplate address={address} addresses={addresses} setAddresses={setAddresses} />
                    </div>
                ))
            }
        </div>
     );
}
 
export default AddressList;