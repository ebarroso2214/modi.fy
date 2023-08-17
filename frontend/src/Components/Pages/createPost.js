import { useState, useContext } from 'react'
import { useNavigate } from "react-router-dom";
import { AuthorUserContext } from '../Context/AuthorUserContext';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import { MdNoteAdd } from "react-icons/md";
import SubmitButton from '../SubmitButton';



function CreatePost( {addPost}){
    const navigate = useNavigate();
    const {user} = useContext(AuthorUserContext);
    const [newPost, setNewPost] = useState({
        author: user._id
    })

      // Handle Change
    const handleChange = (e) => {
    const { id, value } = e.target
    setNewPost({
      ...newPost,
      [id]: value
    })

    console.log(newPost, user)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const newId = await addPost(newPost)
    navigate(`/posts/${newId}`)
  }

    return(
        <Container>
            <Col className='m-auto' xs={12} xl={8}>
                <h1>Create a post</h1>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="title">
                        <Form.Label>New Post</Form.Label>
                        <Form.Control onChange={handleChange} type='text' placeholder='Title'/>
                    </Form.Group>
                    
                    <Form.Group className="mb-3" controlId="pic">
                        <Form.Label>Image URL</Form.Label>
                        <Form.Control onChange={handleChange} type="text" placeholder="Your photo..."  />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="content">
                        <Form.Label>Post Body</Form.Label>
                        <Form.Control onChange={handleChange} as="textarea" rows={5} placeholder='Insert description here' required />
                    </Form.Group>

                    <SubmitButton variant='primary' type='submit'>Submit</SubmitButton>
                </Form>

            </Col>
                
            
        </Container>
        
        
    )
}

export default CreatePost;