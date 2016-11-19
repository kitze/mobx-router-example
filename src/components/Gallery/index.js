import React, {Component} from 'react';
import {observer} from 'mobx-react';
import _ from 'lodash';

class Gallery extends Component {
  render() {
    const {store} = this.props;
    const {router:{queryParams}} = store;

    return (
      <div>
        <h3>Gallery</h3>
        {!_.isEmpty(queryParams) && <ul>
          {_.map(queryParams, (param, key) => <li key={key}><span>{key}</span> - <b>{param}</b></li>)}
        </ul>
        }
      </div>
    );
  }
}

export default observer(['store'], Gallery);
