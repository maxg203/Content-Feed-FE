import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import {
    Row, Col, Card, CardBlock, CardTitle, CardText
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
                    return (
                        <ContentItem item={item} />
                    )
                }

                )}
            </ul>
        );
    }
}

class ContentItem extends React.Component {
    render() {
        return (
            <Row className="ContentItem">
                <Col xs="6">
                    <Card>
                        <CardBlock>
                            <CardTitle>
                                {this.props.item.title}
                            </CardTitle>
                            <CardText>
                                {this.props.item.description}
                            </CardText>
                        </CardBlock>
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
