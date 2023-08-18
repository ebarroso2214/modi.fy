import Button from 'react-bootstrap/Button';

function BackButton(){

const buttonStyle = {
    width:'10em',
    marginRight:'80%'

}
    return(
        <Button style={buttonStyle}variant="primary">Go Back</Button>
    )
    
}

export default BackButton;