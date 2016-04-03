import DS from 'ember-data';

function parseUriId(uri) {
  return uri.split('/').splice(-2, 1).pop();
}

function convertItem(item) {
  return {
    id: item.pkdx_id,
    type: 'pokemon',
    attributes: item,
    relationships: {
      types: {
        data: item.types.map(function(type){
          return {
            type: 'type',
            id: parseUriId(type.resource_uri)
          };
        })
      }
    }
  };
}

export default DS.JSONAPISerializer.extend({
  normalizeQueryResponse (store, primaryModelClass, payload) {
    return {
      meta: payload.meta,
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
