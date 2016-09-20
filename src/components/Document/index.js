import React, {Component} from 'react';
import {observer} from 'mobx-react';

//style
import {css} from 'aphrodite';
import styles from './styles';

class Document extends Component {
  render() {

    const {store}= this.props;
    const {router: {params}} = store;

    return (
      <div className={css(styles.Document)}>
        <h3> Document </h3>
        <div> with id: {params.id} </div>
      </div>
    );
  }
}

export default observer(['store'], Document);
