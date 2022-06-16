import { mdiPlus } from "@mdi/js";
import Icon from "@mdi/react";

const UploadBtn = ({handleFunc}) => {
    return ( 
        <div className="fixed-bottom">
            <div className="d-flex align-items-end flex-column me-5 mb-5">
                <div className="bg-dark p-2 rounded-circle text-white shadow" type="button" onClick={() => handleFunc()}>
                    <Icon size={1.25} path={mdiPlus} />
                </div>
            </div>
            
        </div>
        
     );
}
 
export default UploadBtn;