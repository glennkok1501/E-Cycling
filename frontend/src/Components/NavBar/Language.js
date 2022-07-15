import { mdiEarth, mdiGlobeModel } from "@mdi/js";
import Icon from "@mdi/react";

const Language = () => {
    return ( 
        <div className="dropdown">
            <div className="text-white btn" id="dropdownMenuButton1" data-bs-toggle="dropdown">
                <Icon size={1} path={mdiEarth} />
                En
            </div>
            <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuButton1">
                <li className="dropdown-item">English</li>
                <li className="dropdown-item">中文</li>
                <li className="dropdown-item">Melayu</li>
                <li className="dropdown-item">தமிழ்</li>

            </ul>
        </div>
     );
}
 
export default Language;