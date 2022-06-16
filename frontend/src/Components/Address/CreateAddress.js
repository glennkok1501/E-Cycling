import axios from "axios";
import { useState } from "react";
import { Button, Spinner } from "react-bootstrap";
import Error from "../Utils/Error";

const CreateAddress = ({addresses, setAddresses}) => {

    const [name, setName] = useState('')
    const [address, setAddress] = useState('')
    const [postal, setPostal] = useState('')
    const [error, setError] = useState('')
    const [isPending, setIsPending] = useState(false)

    const clear = () => {
        setName('')
        setAddress('')
        setPostal('')
    }

    const handleSubmit = (e) => {
        setError('')
        e.preventDefault()

        // check if name exists
        for (var i = 0; i < addresses.length; i++) {
            if (addresses[i].name === name) {
                setError('Address name already exists')
                return
            }
        }

        setIsPending(true)

        axios.post(`${process.env.REACT_APP_API}/user/address`, {name, address, postalCode: postal}, {withCredentials: true})
            .then((res) => {
                if (res.status === 200) {
                    setAddresses([res.data, ...addresses])
                    setIsPending(false)
                    clear()
                }
            })
            .catch((err) => {
                console.log(err)
                setIsPending(false)
            })
    }

    return ( 
        <div className="card">
            <div className="card-body">
                <Error error={error} />
                <form onSubmit={(e) => handleSubmit(e)}>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input id="name" className="form-control" type="text" placeholder="Home" value={name} onChange={(e) => setName(e.target.value)} required/>
                    </div>
                    <div className="form-group mt-3">
                        <label htmlFor="address">Address</label>
                        <input id="address" className="form-control" type="text" placeholder="Block 123 Main Road" value={address} onChange={(e) => setAddress(e.target.value)} required/>
                    </div>
                    <div className="form-group mt-3">
                        <label htmlFor="postal">Postal Code</label>
                        <input id="postal" className="form-control" inputmode="numeric" type="text" pattern="\d*" minLength={6} maxLength={6} placeholder="123456" value={postal} onChange={(e) => setPostal(e.target.value)} required />
                    </div>
                    <div className="mt-3 d-flex justify-content-end">
                        <Button size="sm" variant="dark" disabled={isPending} type="submit">
                            {isPending ? <Spinner animation='border' size="sm" /> : 'Save'}
                        </Button>
                    </div>
                </form>
               
            </div>
        </div>
     );
}
 
export default CreateAddress;