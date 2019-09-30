import React, { useState, useEffect } from "react";
import CharacterList from './CharacterList.js';
import {
    Card, CardText, CardBody,
    CardTitle, CardSubtitle, Row, Col
} from 'reactstrap';

export default function CharacterCard(props) {

    return(
        <Row>
            <Col sm="6" md={{ size: 6, offset: 3}}>
            <Card inverse style={{ backgroundColor: '#333', borderColor: '#fff' }}>
              <CardBody>
                <CardTitle>Character: {props.name}</CardTitle>
                <CardSubtitle>Birth: {props.birth}</CardSubtitle>
                <CardText>Gender: {props.gender}</CardText>
                <CardText>Eye Color: {props.eye_color}</CardText>
              </CardBody>
            </Card>
            <br />
          </Col>
        </Row>
            
    )
}