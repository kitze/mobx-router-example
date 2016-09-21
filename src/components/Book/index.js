import React, {Component} from 'react';
import {observer} from 'mobx-react';

class Book extends Component {
  render() {
    const {store} = this.props;
    const {router: {params}} = store;

    return (
      <div>
        <h1> Book {params.id} </h1>
        <h3> Page: {params.page} </h3>
      </div>
    );
  }
}

export default observer(['store'], Book);
