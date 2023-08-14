import { useState, useContext } from 'react'
import { useNavigate } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';


function createPost( {addPost}){


    return(
        <Container>
            <Col className='m-auto' xs={12} xl={8}>
                <h1>Create a post</h1>
                <Form>
                    <Form.Group className="mb-3" controlId="title">
                        <Form.Label>New Post</Form.Label>
                        <Form.Control type='text' placeholder='Title'/>
                    </Form.Group>
                    
                    <Form.Group className="mb-3" controlId="pic">
                        <Form.Label>Image URL</Form.Label>
                        <Form.Control type="text" placeholder="Your photo..."  />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="body">
                        <Form.Label>Post Body</Form.Label>
                        <Form.Control as="textarea" rows={5} placeholder='Insert description here' required />
                    </Form.Group>

                </Form>

            </Col>
                
            
        </Container>
        
        
    )
}

export default createPost;