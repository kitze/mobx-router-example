import React, {Component} from 'react';
import {observer} from 'mobx-react';
import {Link} from '../../router';
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

        <Link view={views.gallery} store={store}> Go to gallery </Link>

        <br/>
        <br/>

        <Link view={views.document} params={{id: 456}} title="Go to document 456" store={store}/>

        <br/>
        <br/>

        <Link view={views.document} removeStyle={true} params={{id: 999}} store={store}>
          <div>
            Go to document <b> 999 </b>
          </div>
        </Link>

        <br/>
        <br/>

        <button onClick={() => goTo(views.document, {id: 123}, store)}> Go to document 123</button>

        <br/>
        <br/>

        <Link view={views.book} params={{id: 250, page: 130}} title="Go to book 250, page 130" store={store}/>

        <br/>
        <br/>

        <button onClick={() => goTo(views.userProfile, {username: 'kitze', tab: 'articles'}, store)}>
          go to user kitze
        </button>

      </div>
    );
  }
}

export default observer(['store'], Home);
