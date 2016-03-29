import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

//This is a route. It will load the NEWS route handler
// ..app/routes/news.js
Router.map(function() {
  this.route('news');
  this.route('portland_rinks');
});

export default Router;

//URL localhost:4200 ==> ROUTER (router.js) ==> News Route (routes/news.js) ==> News Template (templates/news.hbs)
