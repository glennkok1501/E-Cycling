import {Spinner} from 'react-bootstrap'

const Loading = ({isPending}) => {
    return (
        <>
            {
                isPending &&
                <div className='text-center m-5'>
                    <Spinner animation="border" role="status"> <span className="visually-hidden">Loading...</span> </Spinner>
                </div>
            }
        </>
        
    )
}

export default Loading;