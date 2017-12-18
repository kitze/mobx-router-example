import React from 'react';

//models
import {Route} from 'mobx-router';

//components
import Home from 'components/Home';
import Document from 'components/Document';
import Gallery from 'components/Gallery';
import Book from 'components/Book';
import UserProfile from 'components/UserProfile';

const views = {
  home: new Route({
    path: '/',
    component: <Home/>
  }),
  userProfile: new Route({
    path: '/profile/:username/:tab',
    component: <UserProfile/>,
    onEnter: () => {
      console.log('entering user profile!');
    },
    beforeExit: () => {
      console.log('exiting user profile!');
    },
    onParamsChange: (route, params) => {
      console.log('params changed to', params);
    }
  }),
  gallery: new Route({
    path: '/gallery',
    component: <Gallery/>,
    beforeExit: () => {
      const result = window.confirm('Are you sure you want to leave the gallery?');
      return result;
    },
    onEnter: (route, params, store, queryParams)=> {
      console.log('queryParams', queryParams);
    }
  }),
  document: new Route({
    path: '/document/:id',
    component: <Document/>,
    beforeEnter: (route, params, store) => {
      const userIsLoggedIn = store.app.user;
      if (!userIsLoggedIn) {
        alert('Only logged in users can enter this route!');
        return false;
      }
    },
    onEnter: (route, params) => {
      console.log(`entering document with params`, params);
    }
  }),
  book: new Route({
    path: '/book/:id/page/:page',
    component: <Book/>,
    onEnter: (route, params, store) => {
      console.log(`entering book with params`, params);
      store.app.setTitle(route.title);
    }
  })
};
export default views;