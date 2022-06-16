import { useState } from 'react';
import { Button, Card, Container, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Error from '../../Components/Error/Error';
import './auth.css'


const Signup = () => {

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
                            <h1 className='mt-2'>Sign up with us today!</h1>
                            
                            <Error error={error} />

                            <form>

                                <div className='form-group mt-3'>
                                    <label for="username">username</label>
                                    <input id="username" className='form-control' type="text" placeholder='Enter your username' />
                                </div>

                                <div className='form-group mt-3'>
                                    <label for="email">Email</label>
                                    <input id="email" className='form-control' type="email" placeholder='Enter your email address' />
                                </div>
                                
                                <div className='form-group mt-3'>
                                    <label for="password">Password</label>
                                    <input id="password" className='form-control' type="password" placeholder='Enter your password' />
                                </div>

                                <div className='form-group mt-3'>
                                    <label for="password2">Confirm password</label>
                                    <input id="password2" className='form-control' type="password" placeholder='Confirm your password' />
                                </div>

                                <div className='text-center mt-4'>
                                    <Button variant='light' className='w-100' disabled={isPending}>
                                        {isPending ? <Spinner animation='border' size="sm" />: 'Register'}
                                    </Button>
                                </div> 
                            </form>

                            <div className='text-center mt-4'>
                                Already have an account?
                                <br />
                                <Link to="/login" className='text-white'>Login here</Link>
                            </div>
                        </div>
                            
                    </Card.Body>
                </Card>
            </div>
        </Container>
        
     );
}
 
export default Signup;