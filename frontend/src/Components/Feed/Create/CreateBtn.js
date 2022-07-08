
const CreateBtn = ({handleFunc}) => {

    return ( 
        <div className="mb-4">
            <div className="d-flex inline create align-items-center" onClick={handleFunc}>
                <div className="rounded-pill text-white bg-secondary text-light flex-fill p-2 ps-4" type='button'>What's on your mind?</div>
            </div>
        </div>
     );
}
 
export default CreateBtn;