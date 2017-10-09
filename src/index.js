import React from 'react';
import ReactDOM from 'react-dom';


class ContentFeed extends React.Component {
    componentDidMount() {
        this.getItems();
    }

    getItems() {
        fetch('http://localhost:8000/api/item/')
          .then(results => results.json())
          .then(({ results }) => console.log(results));
    }
    render() {
        return null;
    }
}


ReactDOM.render(
    <ContentFeed />,
    document.getElementById('root')
);
