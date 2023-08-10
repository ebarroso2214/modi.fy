import { Link } from "react-router-dom";
import Container from "react-bootstrap/esm/Container";
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'
import CardImg from "react-bootstrap/esm/CardImg";

import Image from 'react-bootstrap/Image'

import Row from 'react-bootstrap/Row'

import image1 from '../../images/02wrx.jpeg'

function Home(){
    

    return(
        <>
            <Container>
                <h1 className="display-5 mb-4"> Home</h1>
                <Row className="justify-content-center g-4 mx-2 mb-5 p-0" xs={12} md={4} xl={3}>
                    <Image src={image1} />
                </Row>
            </Container>
        </>
    )
}

export default Home