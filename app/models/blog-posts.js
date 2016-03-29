import DS from 'ember-data';

export default DS.Model.extend({
  id: DS.attr(),
  title: DS.attr(),
  body: DS.attr(),
  author: DS.attr(),
  image: DS.attr()
});