import React, {Component} from 'react';
import {Link} from 'mobx-router';
import {observer} from 'mobx-react';
import views from 'config/views';

class Book extends Component {
  render() {
    const {store} = this.props;
    const {router: {params}} = store;

    return (
      <div>
        <h1> Book {params.id} </h1>
        <h3> Page: {params.page} </h3>

        <Link
          view={views.book}
          params={{id: 250, page: parseInt(params.page, 10) + 1}}
          title="The next page" store={store}>Go to the next page</Link>


      </div>
    );
  }
}

export default observer(['store'], Book);
