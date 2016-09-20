import React, {Component} from 'react';
import {observer} from 'mobx-react';
import views from '../../config/views';

//style
import {css} from 'aphrodite';
import styles from './styles';

class Home extends Component {
  render() {

    const {store} = this.props;
    const {router: {goTo}} = store;

    return (
      <div className={css(styles.Home)}>
        <h3> Home </h3>

        <button onClick={() => goTo(views.gallery)}> go to gallery</button>
        <br/>
        <br/>

        <button onClick={() => goTo(views.document, {id: 123})}> go to document 123</button>
        <br/>
        <br/>

        <button onClick={() => goTo(views.document, {id: 456})}> go to document 456</button>
        <br/>
        <br/>

        <button onClick={() => goTo(views.book, {id: 250, page: 130}, store)}> go to book 250, page 130</button>

      </div>
    );
  }
}

export default observer(['store'], Home);
