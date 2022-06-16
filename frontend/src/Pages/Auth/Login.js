import axios from 'axios';
import { useState } from 'react';
import { Button, Card, Container, Spinner } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import Error from '../../Components/Utils/Error';
import { setUser } from '../../redux/features/userSlice';
import './auth.css'

const Login = () => {

    const [error, setError] = useState('')
    const [isPending, setIsPending] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const history = useHistory()
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()
        setError('')
        setIsPending(true)

        axios.post(`${process.env.REACT_APP_API}/auth/login`, {email, password}, {withCredentials: true})
            .then((res) => {
                if (res.status === 200) {
                    if (res.data.error) {
                        setError(res.data.error)
                        setIsPending(false)
                    }
                    else {
                        dispatch(setUser(res.data))
                        history.push('/')
                    }
                    
                }
            })
            .catch((err) => {
                setIsPending(false)
                console.log(err)
            })

    }

    return ( 
        <Container>
            <div className='centered w-md-75'>
                <Card variant="dark" bg="dark" text="light" className='shadow-lg'>
                    <Card.Body>
                        <div className='p-2 p-md-5'>
                            <div className='text-center'>
                                <img src="/logo256-full.png" alt="logo" width={128} height={128} />
                            </div>
                            <h1 className='mt-2'>Make a difference now</h1>
                            
                            <Error error={error} />

                            <form onSubmit={(e) => handleSubmit(e)}>
                                <div className='form-group mt-3'>
                                    <label htmlFor="email">Email</label>
                                    <input id="email" className='form-control' type="email" placeholder='Enter Email address' value={email} onChange={(e) => setEmail(e.target.value)} required />
                                </div>
                                
                                <div className='form-group mt-3'>
                                    <label htmlFor="password">Password</label>
                                    <input id="password" className='form-control' type="password" placeholder='Enter password' value={password} onChange={(e) => setPassword(e.target.value)} required />
                                </div>

                                <div className='text-center mt-4'>
                                    <Button variant='light' className='w-100' disabled={isPending} type="submit">
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