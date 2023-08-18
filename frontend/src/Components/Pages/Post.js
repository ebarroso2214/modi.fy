import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import PostComponent from '../PostComponent'
import Container from 'react-bootstrap/esm/Container'
import { useState, useContext, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { AuthorUserContext } from '../Context/AuthorUserContext'
import BackButton from '../BackButton'

function Post(){
    const {id} = useParams()
    const {author} = useContext(AuthorUserContext)
    const [post, setPost] = useState({})
    const navigate = useNavigate()
    const [grandTotal, setGrandTotal] = useState(0);


    useEffect(() => {
        async function getPost() {
          try {
            const response = await fetch(`http://localhost:3001/posts/${id}`);
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

    }

    return (
        <Container>
          <Row className="justify-content-center g-4 mx-5 mb-2 p-2">
            <Link to="/feed">
              <BackButton />
            </Link>
          </Row>
          <Row className="justify-content-center g-4 mx-2 mb-5 p-0">
            <h1>{post.title}</h1>
            <img src={post.pic} alt="car" />
            <h5>{post.content}</h5>
    
            {/* Add a conditional check before mapping over items */}
            {post.items && post.items.length > 0 ? (
                <div>
                    <ul>
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
          </Row>
        </Container>
      );
}
        


export default Post