const View = () => {
    return ( 
        <div>
            
            <div className="card m-3">
                <div className="card-body p-3">
                    <div className="text-center">
                        <img src="https://www.nea.gov.sg/images/default-source/about-us/nea-logo.png" alt="NEA logo" />
                    </div>
                    <h1>Feedback / Enquiry</h1>
                    <div>
                        <strong>Hotline: </strong><a href="tel:62255632">6225 5632</a>
                    </div>
                    <iframe className="mt-3" style={{"height": "900px", "width": "100%"}} title="Request for Loan of Exhibits Form" id="iframe" src="https://e-services.nea.gov.sg/icare/OnlineFeedbackForm.aspx" ></iframe>
                </div>
            </div>
        </div>
     );
}
 
export default View;