import Container from "react-bootstrap/esm/Container"
import PostComponent from "../PostComponent"

function Feed({posts}){
    const postList = posts.map(post =>{
        return(
            <PostComponent key={post._id} post={post}></PostComponent>
        )
    })

    return(
        <h1>Feed Page</h1>
    )
}

export default Feed