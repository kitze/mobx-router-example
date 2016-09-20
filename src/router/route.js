import _ from 'lodash';
import {mapAndFilter} from './utils';

class Route {

  id;
  component;
  path;
  onEnter;
  title;

  constructor(props) {
    _.each(props, (value, key) => this[key] = value);
  }

  /*
   replaces url params placeholders with params from an object
   Example: if url is /book/:id/page/:pageId and object is {id:100, pageId:200} it will return /book/100/page/200
   */
  replaceUrlParams = params => _.reduce(params, (path, value, key) => this.path = path.replace(`:${key}`, value), this.path);

  /*
   converts an array of params [123, 100] to an object
   Example: if the current this.path is /book/:id/page/:pageId it will return {id:123, pageId:100}
   */
  getParamsObject = paramsArray => {

    let params = mapAndFilter(this.path.split('/'), p => p.indexOf(':') !== -1, p=> p.substr(1, p.length - 1));

    const result = _.reduce(paramsArray, (obj, paramValue, index) => {
      obj[params[index]] = paramValue;
      return obj;
    }, {});

    return result;
  }

  goTo = (store, paramsArr) => {
    const paramsObject = this.getParamsObject(paramsArr);
    store.router.goTo(this, paramsObject, store);
  }
}

export default Route;