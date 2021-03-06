import Ember from 'ember';
//this is the INDEX ROUTE HANDLER

//a method within an Ember cass is a HOOK
//the below method is a MODEL HOOK
//MODEL HOOK returns an array of my hard coded blog_posts
//it is now available to corresponding hbs as a MODEL property

// var blog_posts = [{
//   id: 1,
//   title: "2 on 1s",
//   body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
//   author: "Kevin M",
//   image: "http://leanhockey.com/wp-content/uploads/2014/11/freezethegoalielarge.jpg"
// }, {
//   id: 2,
//   title: "Breakaway",
//   body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
//   author: "Kevin M",
//   image: "https://i.ytimg.com/vi/opFuuH7PAzI/maxresdefault.jpg"
// }, {
//   id: 3,
//   title: "Playing the Angle",
//   body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
//   author: "Kevin M",
//   image: "http://668d3eaa831be4d52f0d515f.ingoalmagazine.netdna-cdn.com/wp-content/uploads/2010/09/4114143382_e60ce6e547_z.jpg"
// }];

export default Ember.Route.extend({
  model() {
    return this.store.findAll('blog_posts');
  }, //this exports the model you just created...?
});
