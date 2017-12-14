import React from 'react';
import ReactDOM from 'react-dom';


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
                        <div key={index}>
                            <h1>{item.title}</h1>
                            <p>{item.description}</p>
                        </div>
                    )
                }

                )}
            </ul>
        );
    }
}


ReactDOM.render(
    <ContentFeed />,
    document.getElementById('root')
);
