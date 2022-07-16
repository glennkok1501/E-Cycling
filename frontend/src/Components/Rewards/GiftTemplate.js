const GiftTemplate = ({gift}) => {
    return ( 
        <div className="card shadow hover" type="button">
            <div className="card-body">
                <div className="row">
                    <div className="col-8">
                        <h4>{gift.name}</h4>
                        <h2>${gift.amount}</h2>
                    </div>
                    <div className="col-4 text-end">
                        <small className="text-muted">{`x${gift.stock}`}</small>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default GiftTemplate;