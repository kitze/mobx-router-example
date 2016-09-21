import AppStore from 'mobx/stores/app-store';
import {RouterStore} from 'mobx-router';

const store = {
  app: new AppStore(),
  router: new RouterStore()
};

export default store;