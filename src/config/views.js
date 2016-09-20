import React from 'react';

//models
import {Route} from '../router';

//components
import Home from '../components/Home';
import Document from '../components/Document';
import Gallery from '../components/Gallery';
import Book from '../components/Book';

const views = {
  home: new Route({
    id: 'home',
    title: 'Home',
    path: '/',
    component: <Home/>
  }),
  gallery: new Route({
    id: 'gallery',
    title: 'Gallery',
    path: '/gallery',
    component: <Gallery/>
  }),
  document: new Route({
    id: 'document',
    title: 'Document',
    path: '/document/:id',
    component: <Document/>,
    onEnter: (route, params) => {
      console.log(`entering ${route.title} with params`, params);
    }
  }),
  book: new Route({
    id: 'book',
    title: 'Book',
    path: '/book/:id/page/:page',
    component: <Book/>,
    onEnter: (route, params, store) => {
      console.log(`entering ${route.title} with params`, params);
      store.app.setTitle(route.title);
    }
  })
};
export default views;