import GiftTemplate from "./GiftTemplate";
import Store from "./Store";

const Content = () => {
    const data = Store()
    return ( 
        <div className="row">
            {
                data.length > 0 && 
                data.map((gift) => (
                    <div className="col-lg-6 mt-3" key={gift._id}>
                        <GiftTemplate gift={gift}/>
                    </div>
                ))
            }
        </div>
     );
}
 
export default Content;