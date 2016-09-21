import React, {Component} from 'react';
import {observer} from 'mobx-react';

class Gallery extends Component {
  render() {
    return (
      <div>
        Gallery
      </div>
    );
  }
}

export default observer(['store'], Gallery);
