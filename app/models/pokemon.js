import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  name: DS.attr('string'),

  attack: DS.attr('number'),
  defense: DS.attr('number'),
  hp: DS.attr('number'),
  sp_atk: DS.attr('number'),
  sp_def: DS.attr('number'),
  speed: DS.attr('number'),
  weight: DS.attr('number'),
  moves: DS.attr(),
  sprites: DS.attr(),

  types: DS.hasMany('type'),

  typesString: Ember.computed('types.@each.name', function() {
    return this.get('types').map(function(type) {
      return type.get('name');
    }).join(', ');
  }),

  fullId: Ember.computed('id', function() {
    const id = '' + this.get('id');
    return id.length < 5 ? Array(4-id.length).join('0') + id : id;
  }),

  image: Ember.computed('id', function() {
    const id = '' + this.get('id');
    if (this.get('sprites') && this.get('sprites').length > 0) {
      return `http://pokeapi.co/media/img/${id}.png`;
    } else {
      return '/assets/images/no_image.png';
    }
  })
});
