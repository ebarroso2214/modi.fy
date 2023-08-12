import Container from "react-bootstrap/esm/Container"
import PostComponent from "../PostComponent"
import Row from 'react-bootstrap/Row'

function Feed({posts}){
    const postList = posts.map(post =>{
        return(
            <PostComponent key={post._id} post={post}></PostComponent>
        )
    })

    return(
        <Container>
            <h1 className="display-4 mb-3" >Feed</h1>
            <Row className="justify-content-center g-4 mx-2 mb-5 p-0">{postList}</Row>
        </Container>
        
    )
}

export default Feed