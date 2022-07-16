const GiftTemplate = ({gift}) => {
    return ( 
        <div className="card shadow hover" type="button">
            <div className="card-body">
                <div className="row">
                    <div className="col-3">
                        <img className="img-fluid" style={{"width": "100%", "height": "100%", "objectFit": "cover"}} src={gift.image} alt="company logo" />
                    </div>
                    <div className="col-9">
                        
                        <div className="d-flex flex-column">  
                            <div className="d-flex">
                                <h4>{gift.name}</h4>
                                <div className="ms-auto text-end">
                                    <small className="text-muted">{`x${gift.stock}`}</small>
                                </div>
                            </div>
                            <div>
                                <h2><strong>${gift.amount}</strong></h2>
                            </div>
                            <div className="text-end">
                                Points: <strong>{gift.points}</strong>
                            </div>

                            
                        </div>
                        
                    </div>
                   
                </div>
            </div>
        </div>
     );
}
 
export default GiftTemplate;