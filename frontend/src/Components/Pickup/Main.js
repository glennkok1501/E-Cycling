import { useState } from "react";
import AllPickups from "./AllPickups/AllPickups";
import MyPickups from "./MyPickups/MyPickups";

const Main = () => {

    const [select, setSelect] = useState('all')
    const options = {
        'all': <AllPickups />,
        'my': <MyPickups />
    }

    return ( 
        <div className="row">
            <div className="col-md-8 offset-md-2">
                <ul className="nav nav-pills nav-justified mb-3">
                    <li className="nav-item">
                        <div onClick={() => setSelect('all')} className={`btn nav-link ${(select === 'all') ? 'active' : ''}`}>All Pickups</div>
                    </li>
                    <li className="nav-item">
                        <div onClick={() => setSelect('my')} className={`btn nav-link ${(select === 'my') ? 'active' : ''}`}>My Pickups</div>
                    </li>
                </ul>

                {options[select]}
            </div>
        </div>
     );
}
 
export default Main;