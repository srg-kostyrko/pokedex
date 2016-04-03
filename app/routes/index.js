import Ember from 'ember';

export default Ember.Route.extend({
  queryParams: {
    offset: {
      refreshModel: true
    },
    limit: {}
  },

  model(params) {
    let pokemons = this.store.query('pokemon', params);
    pokemons.then((result) => {
      this.store.pokemon_total = result.get('meta').total_count;
      return result;
    });
    return Ember.RSVP.hash({
      pokemons: pokemons,
      types: this.store.query('type', {limit: 999}),
    });
  }
});
