import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import PostComponent from '../PostComponent'
import Container from 'react-bootstrap/esm/Container'
import { useState, useContext, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { AuthorUserContext } from '../Context/AuthorUserContext'
import BackButton from '../BackButton'
import Card from 'react-bootstrap/Card'
import styles from '../../CSS/Fonts.module.css'

function Post(){
    const {id} = useParams()
    const {author} = useContext(AuthorUserContext)
    const [post, setPost] = useState({})
    const navigate = useNavigate()
    const [grandTotal, setGrandTotal] = useState(0);
    const formattedDate = new Date(post.dateCreated).toLocaleDateString('en-US', {month: 'long', day: 'numeric', year: 'numeric' })

    useEffect(() => {
        async function getPost() {
          try {
            const response = await fetch(`${process.env.REACT_APP_SERVER_URL}posts/${id}`);
            const data = await response.json();
            setPost(data.post);

            const total = data.post.items.reduce((accumulator, item) => {
                return accumulator + item.price;
              }, 0);
              setGrandTotal(total);
          } catch (error) {
            console.error('Error fetching post:', error);
          }
        }
    
        getPost();
      }, [id]);

    console.log(post)

    const itemListStyle = {
      listStyleType: 'none'
    }

    const imageStyling = {
      width: '50%',
      // aspectRatio: '16/9',
      borderRadius: '15px'
  }

    return (
        <Container className='mb-5'>
          <div style={{position:'relative'}}>
            <Link to="/feed">
              <BackButton />
            </Link>
          </div>
          

            <h1 className='title'>{post.title}</h1>
            <span>
              <h6 style={{fontFamily:'Georgia'}}>Posted:{formattedDate}</h6> 
              {/* <h6 style={{fontFamily:'Georgia'}}>Written by: {post.author.username}</h6> */}
            </span>
            <img style={{borderRadius: '15px', width:'90%'}} src={post.pic} alt="car" />
            <h5 style={{fontFamily:'Georgia'}}>{post.content}</h5>
    
            {/* Add a conditional check before mapping over items */}
            {post.items && post.items.length > 0 ? (
                <div>
                  <h1>Mod List</h1>
                    <ul style={itemListStyle}>
                        {post.items.map((item, index) => (
                        <li key={index}>
                            <strong>{item.name}</strong> - ${item.price.toFixed(2)}
                        </li>
                        ))}
                    </ul>
                    <p>Grand Total: ${grandTotal.toFixed(2)}</p>
                </div>
              
            ) : (
              <p>No items available.</p>
            )}
          
        </Container>
      );
}
        


export default Post