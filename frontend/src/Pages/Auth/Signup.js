import { useState } from 'react';
import { Button, Card, Container, Spinner } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios'
import './auth.css'
import {useDispatch} from 'react-redux'
import { setUser } from '../../redux/features/userSlice';
import Error from '../../Components/Utils/Error';

const Signup = () => {

    const [error, setError] = useState('')
    const [isPending, setIsPending] = useState(false)
    const history = useHistory()
    const dispatch = useDispatch()

    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [password2, setPassword2] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        setError('')

        // check username length
        if (username.length < 8) {
            setError('Username must be at least 8 characters long')
            return
        }

        // check valid email
        if (email.length < 1) {
            setError('Please enter an email address')
            return
        }

        // check password complexity
        if (password.length < 1) {
            setError('Please enter a password')
            return
        }
        else {
            const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\\$%\\^&\\*])(?=.{8,})/;
            if (!password.match(regex)) {
                setError('Password does not match complexity')
                return
            }
        }

        // check match passwords
        if (password !== password2) {
            setError("Passwords do not match")
            return
        }

        handleSignup()
    }

    const handleSignup = () => {
        setIsPending(true)

        const formData = new FormData()
        formData.append("username", username)
        formData.append("email", email)
        formData.append("password", password)

        axios.post(`${process.env.REACT_APP_API}/auth/signup`, formData, {
            withCredentials: true,
            headers: {
                "Content-Type": "multipart/form-data"
            }
        })
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
                console.log(err)
                setIsPending(false)
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
                            <h1 className='mt-2'>Sign up with us today!</h1>
                            
                            <Error error={error} />

                            <form onSubmit={(e) => handleSubmit(e)}>

                                <div className='form-group mt-3'>
                                    <label htmlFor="username">username</label>
                                    <input id="username" className='form-control' type="text" placeholder='Enter your username' value={username} onChange={(e) => setUsername(e.target.value)} required />
                                </div>

                                <div className='form-group mt-3'>
                                    <label htmlFor="email">Email</label>
                                    <input id="email" className='form-control' type="email" placeholder='Enter your email address' value={email} onChange={(e) => setEmail(e.target.value)} required />
                                </div>
                                
                                <div className='form-group mt-3'>
                                    <label htmlFor="password">Password</label>
                                    <input id="password" className='form-control' type="password" placeholder='Enter your password' value={password} onChange={(e) => setPassword(e.target.value)} required />
                                </div>

                                <div className='form-group mt-3'>
                                    <label htmlFor="password2">Confirm password</label>
                                    <input id="password2" className='form-control' type="password" placeholder='Confirm your password' value={password2} onChange={(e) => setPassword2(e.target.value)} required />
                                </div>

                                <div className='text-center mt-4'>
                                    <Button variant='light' className='w-100' disabled={isPending} type="submit">
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