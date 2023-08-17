import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import Fade from 'react-bootstrap/Fade';
import { MdPlayArrow } from "react-icons/md";
import {useState, useEffect, useContext} from 'react'
import { useNavigate } from "react-router-dom"
import { AuthorUserContext } from "../Context/AuthorUserContext"
import { Button } from "bootstrap"
import SubmitButton from "../SubmitButton"

function Register(){
    const [newUser, setNewUser] = useState({})
    const [alert, setAlert] = useState({})
    const [open, setOpen] = useState(false)
    const {setUser} = useContext(AuthorUserContext)
    const navigate = useNavigate()


    const handleChange = (e) => {
        const { id, value } = e.target
        setNewUser({
        ...newUser,
        [id]: value
        
        })

    }

    const handleSubmit = async (e) => {
        e.preventDefault()
 
        const response = await fetch('http://localhost:3001/users', {
        method: "POST",
        headers: {
            'Accept':'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newUser)
        })
        const data = await response.json()
        if(data.user) {
            localStorage.setItem("token", JSON.stringify(data.token))
            localStorage.setItem("user", JSON.stringify(data.user))
            setUser(data.user)
            setAlert({variant: 'success', message: `${data.user.username} account created!`})
            setOpen(true)
            setTimeout(() => navigate(`/feed`), 1500) //change back to /users/profile, this is for testing
            
        }
        if(data.error) {
            setAlert({variant: 'danger', message: data.error})
            setOpen(true)
            setTimeout(() => setOpen(false), 3000)
        }
    }
    return (
        <Container>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="username">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type='text' placeholder='Enter a username..' onChange={handleChange}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type='password' placeholder='Enter your password' onChange={handleChange}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="confirmPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type='password' placeholder='Confirm password' onChange={handleChange}/>
                </Form.Group>
                
                <SubmitButton variant='primary' type='submit' >Register</SubmitButton>
                <Fade in={open} className='mt-3'>
                            <div>
                                <Alert variant={alert.variant} onClose={() => setAlert({})}>{alert.message}</Alert>
                            </div>
                </Fade>

            </Form>
        </Container>
    )
}

export default Register