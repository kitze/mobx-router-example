import React, {Component} from 'react';
import {observer} from 'mobx-react';

//style
import {css} from 'aphrodite';
import styles from './styles';

class Gallery extends Component {
  render() {
    return (
      <div className={css(styles.Gallery)}>
        Gallery
      </div>
    );
  }
}

export default observer(['store'], Gallery);
