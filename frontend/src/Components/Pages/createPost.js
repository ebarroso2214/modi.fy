import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthorUserContext } from '../Context/AuthorUserContext';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import { MdNoteAdd, MdDelete } from 'react-icons/md';
import SubmitButton from '../SubmitButton';

function CreatePost({ addPost }) {
  const navigate = useNavigate();
  const { user } = useContext(AuthorUserContext);

  const [newPost, setNewPost] = useState({
    author: user._id,
    title: '',
    pic: '',
    content: '',
    items: [],
  });

  const [item, setItem] = useState({
    name: '',
    price: '',
  });

  const handleAddItem = () => {
    if (item.name && item.price) {
      setNewPost((prevPost) => ({
        ...prevPost,
        items: [...prevPost.items, { ...item }],
      }));
      setItem({
        name: '',
        price: '',
      });
    }
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setNewPost((prevPost) => ({
      ...prevPost,
      [id]: value,
    }));
  };

  const handleItemChange = (e, index, field) => {
    const { value } = e.target;
    const updatedItems = [...newPost.items];
    updatedItems[index][field] = value;
    setNewPost((prevPost) => ({
      ...prevPost,
      items: updatedItems,
    }));
  };

  const handleRemoveItem = (index) => {
    const updatedItems = [...newPost.items];
    updatedItems.splice(index, 1);
    setNewPost((prevPost) => ({
      ...prevPost,
      items: updatedItems,
    }));
  };

  const handleKeyDown = (e) => {
    const charCode = e.which ? e.which : e.keyCode;
    if (charCode === 69 || charCode === 101) { // 'e' or 'E'
      e.preventDefault();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newId = await addPost(newPost);
    navigate(`/posts/${newId}`);
  };

  return (
    <Container>
      <Col className='m-auto' xs={12} xl={8}>
        <h1>Create a post</h1>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="title">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter title"
              value={newPost.title}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group controlId="pic">
            <Form.Label>Image URL</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter image URL"
              value={newPost.pic}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group controlId="content">
            <Form.Label>Content</Form.Label>
            <Form.Control
              as="textarea"
              rows={5}
              placeholder="Enter content"
              value={newPost.content}
              onChange={handleChange}
            />
          </Form.Group>

          <h4>Add Items:</h4>
          {newPost.items.map((item, index) => (
            <div key={index} className='mb-3'>
              <Form.Group controlId={`itemName-${index}`}>
                <Form.Label>Item Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter item name"
                  value={item.name}
                  onChange={(e) => handleItemChange(e, index, 'name')}
                />
              </Form.Group>
              <Form.Group controlId={`itemPrice-${index}`}>
                <Form.Label>Item Price</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Enter item price"
                  value={item.price}
                  onChange={(e) => handleItemChange(e, index, 'price')}
                />
                <MdDelete className='clickable-icon' onClick={() => handleRemoveItem(index)} />
              </Form.Group>
            </div>
          ))}

          <Form.Group controlId="newItemName">
            <Form.Label>New Item Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter new item name"
              value={item.name}
              onChange={(e) => setItem({ ...item, name: e.target.value })}
            />
          </Form.Group>
          <Form.Group controlId="newItemPrice">
            <Form.Label>New Item Price</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter new item price"
              value={item.price}
              onChange={(e) => setItem({ ...item, price: e.target.value })}
              onKeyDown={handleKeyDown}
            />
          </Form.Group>
          <p style={{fontWeight:500}}>Add/Save Item</p>
          <MdNoteAdd className='clickable-icon' onClick={handleAddItem} />
          
          

          <SubmitButton variant='primary' type='submit'>Submit</SubmitButton>
        </Form>
      </Col>
    </Container>
  );
}

export default CreatePost;