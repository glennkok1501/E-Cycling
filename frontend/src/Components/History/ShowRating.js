import { mdiStar } from "@mdi/js";
import Icon from "@mdi/react";

const ShowRating = ({rating}) => {

    const arr = (Array.from(Array(5).keys()))
    return ( 
        <div className="d-flex inline justify-content-around">
                {
                    arr.map((a) => (
                        <div key={a} className={`${a+1 <= rating ? 'text-warning' : 'text-muted'}`}>
                            <Icon size={2} path={mdiStar} />
                        </div>
                    ))
                }
            </div>
     );
}
 
export default ShowRating;