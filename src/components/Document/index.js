import React, {Component} from 'react';
import {observer} from 'mobx-react';

//style
class Document extends Component {
  render() {

    const {store}= this.props;
    const {router: {params}} = store;

    return (
      <div>
        <h3> Document </h3>
        <div> with id: {params.id} </div>
      </div>
    );
  }
}

export default observer(['store'], Document);
