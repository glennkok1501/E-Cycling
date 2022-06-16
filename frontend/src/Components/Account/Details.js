import formatDate from "../Utils/DateTimeFormat";

const Details = ({account}) => {

    return ( 
        <div className="d-flex align-items-center">
            <div className="me-auto">
                <h3>{account.username}</h3>
                <h4>{account.email}</h4>
                <small className="text-muted">{`Joined since ${formatDate(account.createdAt)}`}</small>
            </div>
            <div className="btn btn-dark">
                Manage Addresses
            </div>
        </div>
     );
}
 
export default Details;