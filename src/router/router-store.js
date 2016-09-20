import {extendObservable, action, toJS} from 'mobx';

class Router {

  params = {};
  currentView;

  constructor() {
    extendObservable(this, {
      currentView: undefined,
      params: undefined,
      currentPath: () => this.currentView ? this.currentView.replaceUrlParams(this.params) : ''
    });
  }

  goTo = action((view, paramsObj, store) => {
    this.currentView = view;
    this.params = paramsObj;
    view.onEnter && view.onEnter(view, toJS(paramsObj), store);
  });

}

export default Router;