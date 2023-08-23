import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthorUserContext } from "../Context/AuthorUserContext";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import Fade from 'react-bootstrap/Fade';
import SubmitButton from "../SubmitButton";
import {MdLockOpen} from 'react-icons/md'

function Login(){
    const navigate = useNavigate()
    const { setUser } = useContext(AuthorUserContext)
    const [alert, setAlert] = useState({})
    const [open, setOpen] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()

        const response = await fetch(`${process.env.REACT_APP_SERVER_URL}users/login`, {
        method: "POST",
        headers: {
            'Accept':'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            username: e.target.querySelector('#username').value,
            password: e.target.querySelector('#password').value
            })
        })
        const data = await response.json()
        console.log(data)
        if(data.user){
            const {password, ...rest} = data.user
            setUser(rest)
            localStorage.setItem("token", data.token)
            localStorage.setItem("user", JSON.stringify(rest))
            setAlert({variant: 'success', message: `${data.user.username} is signing in!`})
            setOpen(true)
            setTimeout(() => navigate('/feed'), 800)
        }
        if(data.error){
            setAlert({variant: 'danger', message: data.error})
            setOpen(true)
            setTimeout(() => setOpen(false), 4000)
        }
    }

    return (
        <Container>
        <Row className="justify-content-center">
            <Col xs={12} md={6}>
                <h1 className="mb-5 display-5">Login:</h1>
                <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="username">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" placeholder="Your Username..." required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Your Password" required />
                </Form.Group>

                <SubmitButton variant='primary' type='submit' start='110px' end='200px'>
                Login <MdLockOpen  size={20} />
                </SubmitButton>
                </Form>
                <Fade in={open} className='mt-3'>
                    <div>
                        <Alert variant={alert.variant} onClose={() => setAlert({})}>{alert.message}</Alert>
                    </div>
                </Fade>
            </Col>
        </Row>
    </Container>
    )
}

export default Login