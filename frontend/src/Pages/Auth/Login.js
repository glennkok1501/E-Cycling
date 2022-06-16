import { useState } from 'react';
import { Button, Card, Container, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Error from '../../Components/Error/Error';
import './auth.css'


const Login = () => {

    const [error, setError] = useState('')
    const [isPending, setIsPending] = useState(false)

    const handleSuccess = (res) => {
        console.log(res)
    }

    const handleFailure = (res) => {
        console.log(res)
        // console.log("Unexpected error please try again later")
    }
    

    return ( 
        <Container>
            <div className='centered w-md-75'>
                <Card variant="dark" bg="dark" text="light">
                    <Card.Body>
                        <div className='p-2 p-md-5'>
                            <div className='text-center'>
                                <img src="/logo256-full.png" alt="logo" width={128} height={128} />
                            </div>
                            <h1 className='mt-2'>Make a difference now</h1>
                            
                            <Error error={error} />

                            <form>
                                <div className='form-group mt-3'>
                                    <label for="email">Email</label>
                                    <input id="email" className='form-control' type="email" placeholder='Enter Email address' />
                                </div>
                                
                                <div className='form-group mt-3'>
                                    <label for="password">Password</label>
                                    <input id="password" className='form-control' type="password" placeholder='Enter password' />
                                </div>

                                <div className='text-center mt-4'>
                                    <Button variant='light' className='w-100' disabled={isPending}>
                                        {isPending ? <Spinner animation='border' size="sm" />: 'Login'}
                                    </Button>
                                </div> 
                            </form>

                            <div className='text-center mt-4'>
                                <Link to="/signup" className='text-white'>Sign up here</Link>
                            </div>
                        </div>
                            
                    </Card.Body>
                </Card>
            </div>
        </Container>
        
     );
}
 
export default Login;