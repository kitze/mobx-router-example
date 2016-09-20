import React, {Component} from 'react';
import _ from 'lodash';
import {observer} from 'mobx-react';
import views from '../../config/views';

//style
import {css} from 'aphrodite';
import styles from './styles';

class UserProfile extends Component {
  render() {

    const {store} = this.props;
    const {router:{params, goTo}} = store;

    const tabs = [
      {
        name: 'Articles',
        id: 'articles',
      },
      {
        name: 'Following',
        id: 'following'
      },
      {
        name: 'Followers',
        id: 'followers'
      }
    ];

    return (
      <div className={css(styles.UserProfile)}>

        <h1> User profile </h1>

        <h3>Tabs:</h3>

        {_.map(tabs, (tab, key) => <button
            key={key}
            style={{...params.tab === tab.id && {backgroundColor: 'blue', color: 'white'}}}
            onClick={() => goTo(views.userProfile, {...params, tab: tab.id}, store)}>
            {tab.name}
          </button>
        )}

        {params.tab === 'articles' && <div>
          <ul>
            <li>Article 1</li>
            <li>Article 2</li>
            <li>Article 3</li>
          </ul>
        </div>
        }

        {params.tab === 'following' && <div>
          <ul>
            <li>John Doe</li>
            <li>John Snow</li>
            <li>John Oliver</li>
          </ul>
        </div>
        }

        {params.tab === 'followers' && <div>
          <ul>
            <li>This guy</li>
            <li>That guy</li>
            <li>That other guy</li>
          </ul>
        </div>
        }

      </div>
    );
  }
}

export default observer(['store'], UserProfile);
