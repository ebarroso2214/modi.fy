import Container from "react-bootstrap/esm/Container"

function PostComponent ( {post}){
    const imageStyling = {
        backgroundImage: `url(${post.pic})`,
        width: '100%',
        aspectRatio: '16/9'
    }
    
    return(
        <Container>
            <br></br>
            <h4>{post.author.username}</h4>
            <h1> {post.content} </h1>
            <img style ={imageStyling} src={post.pic} alt="car"/>
            
        </Container>
        
    )
}

export default PostComponent