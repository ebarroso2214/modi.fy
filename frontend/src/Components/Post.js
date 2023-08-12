import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


function Post({ post }){
    const imageStyling = {
        backgroundImage: `url(${post.pic})`,
        width: '100%',
        aspectRatio: '16/9'
    }

    return (
        <Row>
            <Col style={imageStyling}>
                <p>{post.pic}</p>
                <h>{post.author.username}</h>
            </Col>
            
        </Row>
    )
}

export default Post