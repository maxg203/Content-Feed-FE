import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import {
  Row, Col, Card, CardBody, CardTitle, CardText, CardImg
} from 'reactstrap';
import './index.css'


class ContentFeed extends React.Component {
  constructor() {
    super();

    this.state = {
      'items': []
    }
  }
  componentDidMount() {
    this.getItems();
  }

  getItems() {
    fetch('http://localhost:8000/api/item/')
    .then(results => results.json())
    .then(results => this.setState({'items': results}));
  }
  render() {
    return (
      <ul>
        {this.state.items.map(function(item, index) {
          return <ContentItem item={item} key={index} />
        })}
      </ul>
    );
  }
}

class ContentItem extends React.Component {
  render() {
    return (
      <Row className="ContentItem">
        <Col xs="3"></Col>
        <Col xs="6">
          <Card>
            <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"></CardImg>
            <CardBody>
              <CardTitle>
                {this.props.item.title}
              </CardTitle>
              <CardText>
                {this.props.item.description}
              </CardText>
            </CardBody>
          </Card>
        </Col>
      </Row>
    )
  }
}


ReactDOM.render(
  <ContentFeed />,
  document.getElementById('root')
);
