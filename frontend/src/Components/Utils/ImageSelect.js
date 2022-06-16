import { mdiClose } from "@mdi/js";
import Icon from "@mdi/react";
import { useState } from "react";
import Error from "./Error";
import formatBytes from './BytesShortener'

const ImageSelect = ({image, setImage}) => {

    const MAX_SIZE = 10 * 1024 * 1024 //10 MB
    const [error, setError] = useState('')

    const handleRenderImg = (e) => {
        setError('')
        const file = e.target.files[0]
        if (file.size > MAX_SIZE) {
            setError(`Maximum image size is ${formatBytes(MAX_SIZE)}`)
            setImage(null)
            return
        }
        setImage(file)
    }

    return ( 
        <div className="position-relative">
        <Error error={error} />
        {image && <div className="position-absolute top-0 end-0 m-2 bg-white rounded-circle shadow"
        onClick={() => setImage(null)} type="button">
            <Icon path={mdiClose} size={1}/>
        </div>}
            <label className='form-label w-100 text-center'>
                <div className="border p-2 rounded">
                    {image && <img className="img-fluid" src={URL.createObjectURL(image)} alt="preview" style={{"height":"256px", "width":"256px", "objectFit":"cover"}} />}
                    <div className={`d-flex align-items-center justify-content-center bg-light p-5 ${(image && 'd-none')}`} type="button">
                        <strong>Add Photo</strong>
                        <input style={{display: 'none'}} className='form-control' type="file" accept="image/png, image/jpeg" onChange={(e) => handleRenderImg(e)} />
                    </div>
                </div>
            </label>
        </div>
        
     );
}
 
export default ImageSelect;