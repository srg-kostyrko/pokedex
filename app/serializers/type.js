import DS from 'ember-data';

function parseUriId(uri) {
  return uri.split('/').splice(-2, 1).pop();
}

function convertItem(item) {
  return {
    id: item.id ? item.id : parseUriId(item.resource_uri),
    type: 'type',
    attributes: {
      name: item.name
    }
  };
}


export default DS.JSONAPISerializer.extend({
  normalizeQueryResponse (store, primaryModelClass, payload) {
    return {
      data: payload.objects.map(function(item) {
        return convertItem(item);
      })
    };
  },

  normalizeFindRecordResponse (store, primaryModelClass, payload) {
    return {
      data: convertItem(payload)
    };
  }
});
