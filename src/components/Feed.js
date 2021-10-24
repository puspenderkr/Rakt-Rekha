import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Addpost from './Addpost'
import Postlist from './Postlist'
import Profile from './Profile'

export default function Feed({userDetails}) {
    return (
        <div>
            <Container>
                <Row>
                   <Col className="teal" s={12} m={4}><Profile userDetails={userDetails} /> </Col>
                   <Col className="blue" s={12} m={8}><Addpost/>  <Postlist userDetails={userDetails}/>  </Col>
                </Row>
            </Container>
            
        </div>
    )
}
