import Inflector from 'ember-inflector';

const inflector = Inflector.inflector;

inflector.uncountable('pokemon');
inflector.uncountable('type');

// Meet Ember Inspector's expectation of an export
export default {};
