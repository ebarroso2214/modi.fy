import Button from 'react-bootstrap/Button';

function BackButton(){

const buttonStyle = {
    width:'10em',

}
    return(
        <Button style={buttonStyle}variant="primary">Go Back</Button>
    )
    
}

export default BackButton;