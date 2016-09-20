import React from 'react';
import ReactDOM from 'react-dom';
import MobxRouter from './router/MobxRouter';

//mobx
import {Provider} from 'mobx-react';
import store from './mobx/store';

//router
import views from './config/views';
import {startRouter} from './router';
startRouter(views, store);

ReactDOM.render(
  <Provider store={store}>
    <div>
      <h1>{store.app.title}</h1>
      <button onClick={() => store.router.goTo(views.home)}> go home</button>
      <MobxRouter/>
    </div>
  </Provider>, document.getElementById('root')
)