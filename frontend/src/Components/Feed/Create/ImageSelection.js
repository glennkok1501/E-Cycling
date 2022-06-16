import ImageSelect from "../../Utils/ImageSelect";

const ImageSelection = ({image, setImage, setSelection}) => {
    return ( 
        <>
            <ImageSelect image={image} setImage={setImage}/>
            {image && 
            <div className="text-primary text-end p-1" type="button"
            onClick={() => setSelection('caption')}>
                Next
            </div>}
        </>
     );
}
 
export default ImageSelection;