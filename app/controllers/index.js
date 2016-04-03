import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: ['offset', 'types'],
  offset: 0,
  limit: 12,
  types: '',

  filteredPokemons: Ember.computed('types', 'model', function() {
    var selectedFilters = this.get('types');
    if (selectedFilters) {
      selectedFilters = selectedFilters.split(',');
    }
    var pokemons = this.get('model').pokemons;

    if (selectedFilters.length > 0) {
      return pokemons.filter((pokemon) => {
        let hasType = false;
        pokemon.get('types').forEach((type) => {
          if (selectedFilters.indexOf(type.get('id')) >= 0) {
            hasType = true;
          }
        });
        return hasType;
      });
    } else {
      return pokemons;
    }
  }),

  actions: {
    viewPokemon(id) {
      this.transitionToRoute('index.view', id);
      window.scrollTo(0,0);
    },
    showMore() {
      let newOffset = this.offset + this.limit;
      if (newOffset > this.store.pokemon_total) {
        newOffset = 0;
      }
      this.transitionToRoute('index', { queryParams: {offset: newOffset} });
    },
    updateSelected(component, selected) {
      this.set('types', selected);
    }
  }
});
