import { mdiCircle } from "@mdi/js";
import Icon from "@mdi/react";
import { useState } from "react";

const Checklist = () => {
    const [checklist, setChecklist] = useState(false)

    return ( 
        <>
            
            <div className="d-flex justify-content-end">
                <div class="form-check form-switch mt-3">
                    <input class="form-check-input" type="checkbox" checked={checklist} onChange={() => setChecklist(!checklist)} />
                    <label class="form-check-label"><h5 className="m-0">Checklist</h5></label>
                </div>
            </div>

            <table className="table">
                <tbody>
                    <tr>
                        <td>
                            {checklist ? <input class="form-check-input" type="checkbox" /> : <Icon size={0.5} path={mdiCircle} />}
                        </td>
                        <td>
                            <h5 className="ms-3 m-0">Ensure that you use a bag or box to store the recycables</h5>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            {checklist ? <input class="form-check-input" type="checkbox" /> : <Icon size={0.5} path={mdiCircle} />}
                        </td>
                        <td>
                            <div className="ms-3 ">
                                <h5 className="m-0">Only materials listed on the blue bin (glass, paper, plastic, metal)</h5> 
                                <small className="text-muted">Single-use packaging such as disposable containers and cups often cannot be recycled as they are contaminated with food</small>
                            </div>
                        </td>
                    </tr>

                    <tr>
                        <td>
                            {checklist ? <input class="form-check-input" type="checkbox" /> : <Icon size={0.5} path={mdiCircle} />}
                        </td>
                        <td>
                            <div className="ms-3 ">
                                <h5 className="m-0">Separate reusables (clothes, shoes, stuffed toys) from recyclables</h5> 
                                <small className="text-muted">Reusables that are in good condition should be donated</small>
                            </div>
                        </td>
                    </tr>

                    <tr>
                        <td>
                            {checklist ? <input class="form-check-input" type="checkbox" /> : <Icon size={0.5} path={mdiCircle} />}
                        </td>
                        <td>
                            <div className="ms-3 ">
                                <h5 className="m-0">Make sure your items are not contaminated with food or liquids</h5> 
                                <small className="text-muted">
                                    items such as shampoo/detergent bottles, canned/bottled drinks, cosmetic jars, jam jars need to be clean before they can be recycled
                                </small>
                            </div>
                        </td>
                    </tr>

                    <tr>
                        <td>
                            {checklist ? <input class="form-check-input" type="checkbox" /> : <Icon size={0.5} path={mdiCircle} />}
                        </td>
                        <td>
                            <h5 className="ms-3 m-0">Give wet or greasy containers a simple rinse before you put them into the blue bin</h5>
                        </td>
                    </tr>

                    <tr className="text-danger">
                        <td>
                            {checklist ? <input class="form-check-input" type="checkbox" /> : <Icon size={0.5} path={mdiCircle} />}
                        </td>
                        <td>
                            <h5 className="ms-3 m-0">Food waste and e-wates <strong><u>are not</u></strong> disposed in the blue recycling bins</h5>
                        </td>
                    </tr>

                    <tr className="text-danger">
                        <td>
                            {checklist ? <input class="form-check-input" type="checkbox" /> : <Icon size={0.5} path={mdiCircle} />}
                        </td>
                        <td>
                            <h5 className="ms-3 m-0"><strong><u>Do not</u></strong> throw trash or bulky items like furniture and renovation waste into blue recycling bins</h5>
                        </td>
                    </tr>
                </tbody>
            </table>
        </>
        
     );
}
 
export default Checklist;