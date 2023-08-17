import Container from "react-bootstrap/esm/Container"
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {Link} from 'react-router-dom'

function PostComponent ( {post}){
    const imageStyling = {
        // backgroundImage: `url(${post.pic})`,
        width: '100%',
        aspectRatio: '16/9'
    }

    const feedStyling1 = {
        fontSize:'1em'
    }
    
    return(
        <Container>
            <br></br>
            <Row className="d-flex my-0 p-0">
                <Col xs={2}style={feedStyling1}>Post by: {post.author.username} </Col>
                <Col xs={8}>{post.title}</Col>
                
            </Row>
            <Link to={`/posts/${post._id}`}><img style ={imageStyling} src={post.pic} alt="car"/></Link>
            
        </Container>
        
    )
}

export default PostComponent