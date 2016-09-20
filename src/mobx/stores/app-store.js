import {extendObservable, action} from 'mobx';

class AppStore {
  constructor() {
    extendObservable(this, {
      title: 'MobX Router Tutorial'
    });
  }

  setTitle = action(title => {
    this.title = title;
  });
}

export default AppStore;