import DS from 'ember-data';
import Ember from 'ember';

const colors = {
  Normal: '',
  Fighting: 'cadetblue',
  Flying: 'deepskyblue',
  Poison: 'purple',
  Ground: 'brown',
  Rock: 'lightgrey',
  Bug: 'violet',
  Ghost: 'white',
  Steel: 'grey',
  Fire: 'red',
  Water: 'blue',
  Grass: 'green',
  Electric: 'yellow',
  Ice: 'teal',
  Dragon: 'orange',
  Dark: 'black',
  Fairy: 'pink',
  Unknown: '',
  Shadow: 'dark',
  Psychic: 'cyan'
};

export default DS.Model.extend({
  name: DS.attr('string'),

  color: Ember.computed('name', function() {
    const name = this.get('name');
    if (name in colors) {
      return colors[name];
    }
    return '';
  }),
});
