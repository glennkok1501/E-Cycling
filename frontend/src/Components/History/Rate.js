import { mdiStar } from "@mdi/js";
import Icon from "@mdi/react";
import axios from "axios";
import { useState } from "react";
import { Button, Spinner } from "react-bootstrap";

const Rate = ({pickup, pickups, setPickups, handleClose}) => {

    const ratings = [1,2,3,4,5]
    const [myRating, setMyRating] = useState(0)
    const [isPending, setIsPending] = useState(false)

    const handleRate = () => {
        setIsPending(true)
        axios.put(`${process.env.REACT_APP_API}/pickup/rate`, {pickupId: pickup._id, rating: myRating}, {withCredentials: true})
            .then((res) => {
                if (res.status === 200) {
                    setIsPending(false)
                    setPickups(pickups.map((p) => p._id === pickup._id ? {...p, rating: myRating} : p) )
                    handleClose()
                }
            })
            .catch((err) => {
                setIsPending(false)
                console.log(err)
            })
        
    }

    return ( 
        <div className="border p-2 ">
            <h6>Please rate:</h6>
            <div className="d-flex inline justify-content-around">
                {
                    ratings.map((rating) => (
                        <div type="button" className={`${rating <= myRating ? 'text-warning' : 'text-muted'}`} key={rating} onClick={(e) => setMyRating(rating)}>
                            <Icon size={2} path={mdiStar} />
                        </div>
                    ))
                }
            </div>
            <div className="mt-2 text-center">
                <Button variant='dark' size="sm" className='w-75' disabled={isPending | myRating === 0} onClick={handleRate}>
                    {isPending ? <Spinner animation='border' size="sm" />: 'Submit'}
                </Button>
            </div>
        </div>
        
     );
}
 
export default Rate;