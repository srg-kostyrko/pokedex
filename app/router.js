import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('index', function() {
    this.route('view', {path: '/:pokemon_id'});
  });
});

export default Router;
