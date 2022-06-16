import { mdiClose, mdiMapMarker,  } from "@mdi/js";
import Icon from "@mdi/react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../../redux/features/userSlice";

const AddressTemplate = ({address, addresses, setAddresses}) => {

    const dispatch = useDispatch()
    const user = useSelector((state) => state.user.value)

    const handleDelete = () => {
        axios.delete(`${process.env.REACT_APP_API}/user/address`, {withCredentials: true, data:{name: address.name}})
            .then((res) => {
                if (res.status === 200) {
                    const data = addresses.filter((a) => a.name !== address.name)
                    setAddresses(data)
                    dispatch(setUser({...user, addresses: data}))
                }
            })
            .catch((err) => {
                console.log(err)
            })
    }

    return ( 
        <div className="card mb-2">
            <div className="card-body">

                <div className="d-flex align-items-center">
                    <div className="me-auto">
                        <h5>{address.name}</h5>
                        <Icon size={0.8} path={mdiMapMarker} />
                        {address.address}
                        <h6 className="ms-3">S{address.postalCode}</h6>
                    </div>
                    <div className="text-danger" type="button" onClick={handleDelete}>
                        <Icon size={1} path={mdiClose} />
                    </div>
                </div>


            </div>
        </div>
     );
}
 
export default AddressTemplate;