import Container from "react-bootstrap/esm/Container"
import Form from 'react-bootstrap/Form'
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
        method: "post",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newUser)
        })
        const data = await response.json()
        if(data.user) {
            localStorage.setItem("token", data.token)
            localStorage.setItem("author", data.user)
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
                <Form.Group className="mb-3" controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type='text' placeholder='Enter your email..'/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type='password' placeholder='Enter your password'/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="confirmPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type='password' placeholder='Confirm password'/>
                </Form.Group>
                
                <SubmitButton variant='primary' type='submit' end = '200px' start='110px'>Register</SubmitButton>
                

            </Form>
        </Container>
    )
}

export default Register