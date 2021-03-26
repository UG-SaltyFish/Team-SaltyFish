import React from 'react';
import {Card, Nav} from 'react-bootstrap';
import image from './blank-profile.png';

import "./thumbnailsize.css"


export const testCard = props => (
    <Nav>
        <Nav.Link href={props.link}>
        <div class = "row">
            <Card style={{ width: '20rem' }}>
                <Card.Img src={image} alt= "Card image"/>
            </Card>
            <Card style={{ width: '20rem' }}>
                <Card.Header> {props.name} </Card.Header>
                <Card.Body>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
        </Nav.Link>
    </Nav>
  )
  
  export default testCard;