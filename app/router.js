import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() { //This is a route. It will load the NEWS route handler
  this.route('news');   // ..app/routes/news.js
});

export default Router;
