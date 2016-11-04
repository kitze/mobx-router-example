import {extendObservable, action} from 'mobx';

class AppStore {
  constructor() {
    extendObservable(this, {
      title: 'MobX Router Tutorial',
      user: undefined,
    });
  }

  setTitle = action(title => {
    this.title = title;
  });

  setUser = action(user => {
    this.user = user;
  })
}

export default AppStore;
