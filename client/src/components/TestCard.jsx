import React from 'react'
import {Card, Nav, CardGroup} from 'react-bootstrap'

// export const TestCard = (user) => (
//     <Card style={{ width: '18rem' }}>
//         <Card.Body>
//             <Card.Title>{user.name}</Card.Title>
//                 <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
//                     <Card.Text>
//                     Some quick example text to build on the card title and make up the bulk of
//                     the card's content.
//                     </Card.Text>
//                 <Card.Link href="#">Card Link</Card.Link>
//             <Card.Link href="#">Another Link</Card.Link>
//         </Card.Body>
//     </Card>
// )


import image from './blank-profile.png';

import "./thumbnailsize.css"


export const TestCard = props => (
    <Nav>
        <div class = "row">
            <CardGroup>
                <Card style={{ width: '20rem' }}>
                    <Card.Img src={image} alt= "Card image"/>
                </Card>
                <Card style={{ width: '20rem' }}>
                    <Card.Header> {props.name} </Card.Header>
                    <Card.Body>
                        <Card.Text>
                            {props.bio}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </CardGroup>
        </div>
    </Nav>
  )

export default TestCard;
