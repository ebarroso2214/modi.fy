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
        margin:'auto'
    }
    
    return(
        <Container>
            <Card style={cardStyling}>
                <Card.Body>
                <Card.Text>
                    {post.title}
                    <p>Post By: {post.author.username}</p>
                </Card.Text>
                </Card.Body>
                <Link to={`/posts/${post._id}`}><Card.Img style={imageStyling} variant="bottom" src={post.pic} /></Link>
            </Card>
            <br></br>

            {/* <br></br>
            <Row className="d-flex my-0 p-0">
                <Col xs={2}style={feedStyling1}>Post by: {post.author.username} </Col>
                <Col xs={8}>{post.title}</Col>
                
            </Row>
            <Link to={`/posts/${post._id}`}><img style ={imageStyling} src={post.pic} alt="car"/></Link> */}
            

        </Container>
        
    )
}

export default PostComponent