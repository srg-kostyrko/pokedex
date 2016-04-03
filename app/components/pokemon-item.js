import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['card'],

  click() {
    this.get('onClick')(this.pokemon.id);
  }
});
