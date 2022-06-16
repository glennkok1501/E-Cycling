const CaptionSelection = ({caption, setCaption, setSelection}) => {

    const MAX_LENGTH = 512

    return ( 
        <>
            <div>
                <textarea type='text' rows={10} maxLength={MAX_LENGTH} className="h-50 form-control" value={caption} placeholder="Write a message..." onChange={(e) => setCaption(e.target.value)}/>
                <div className="d-flex inline">
                    <div className="text-primary me-auto" type="button"
                    onClick={() => setSelection('image')}>
                        Back
                    </div>
                    <div className="text-end">{`${caption.length}/${MAX_LENGTH}`}</div>

                </div>
                
            </div>
            
        </>
     );
}
 
export default CaptionSelection;