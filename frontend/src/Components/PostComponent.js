import Container from "react-bootstrap/esm/Container"
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {Link} from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import styles from '../CSS/Fonts.module.css'

function PostComponent ( {post}){
    const imageStyling = {
        // width: '100%',
        // aspectRatio: '16/9',
        borderRadius: '15px'
    }

    const feedStyling1 = {
        fontSize:'1em'
    }

    const cardStyling = {
        padding:'10px',
        width:'50%',
        margin:'auto',
        boxShadow: '10px 10px 8px 2px #888888'
    }
    
    return(
        <Container>
            <Card style={cardStyling}>
                <Card.Body>
                <Card.Text>
                    <h6>{post.title}</h6>
                    <h6>Post By: {post.author.username}</h6>
                </Card.Text>
                </Card.Body>
                <Link to={`/posts/${post._id}`}><Card.Img style={imageStyling} variant="bottom" src={post.pic} /></Link>
            </Card>
            <br></br>
        </Container>
        
    )
}

export default PostComponent