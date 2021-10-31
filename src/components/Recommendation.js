import React, {Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Button,  Row, Col,Card} from 'react-bootstrap';
import Image from 'react-bootstrap/Image'
import './Recommendation.css';

function Item (props){
  return (
      <Card className = "card-container">
      <Row>
        <Col className = 'columns'>
        <text className = 'label'>Data Science Internship</text>
        </Col>
        <Col className = 'columns'>
          <Image src = 'abc/png' roundedCircle />
            </Col>
            <Col className = 'columns'>
          MissionEd
          </Col>
        <Col className = 'columns'>
          6 Likes
          </Col>
          <Col className = 'columns'>
          2 weeks
          </Col>
          <Col className = 'columns'>
        <Button variant="primary">View Details</Button>
          </Col>
      </Row>
    </Card>
     )
}

class Recommendation extends Component {
  render() {
    return (
      <div>
        <h1 className = 'heading-1'><center>Recommendations</center></h1>
        <Item/>
        <Item/>
        <Item/>
        <Item/>
        <Item/>
        <Item/>
        <Item/>
        <Item/>
        <Item/>
        <Item/>
        <Item/>
        <Item/>
        </div>
    );
  }
}

export default Recommendation;