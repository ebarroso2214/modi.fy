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

    useEffect(()=> {
        async function getPost() {
            const response = await fetch(`http://localhost:3001/posts/${id}`)
            
            const data = await response.json();

            setPost(data.post)
            // console.log(data)
        }

        getPost()
    }, [id])

    console.log(post)

    return(
        <Container>
            
            <Row className="justify-content-center g-4 mx-5 mb-2 p-2">
            <Link to='/feed'><BackButton/></Link>
            </Row>
            <Row className="justify-content-center g-4 mx-2 mb-5 p-0">
                <h1>{post.title}</h1>
                <img src={post.pic} alt='car'/>
                <h5>{post.content}</h5>
            </Row>
        </Container>
        
    )
}


export default Post