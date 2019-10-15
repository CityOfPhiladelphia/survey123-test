export default {
    id: 'weekMill',
    url: 'https://services.arcgis.com/fLeGjb7u4uXqeF9q/arcgis/rest/services/StreetSmartPHL/FeatureServer/3',
    dependent: 'none',
    type: 'esri',
    options: {
        relationship: 'where',
    },
    parameters: {
      targetField: 1,
      sourceValue: 1
    },
    success(data) {
        return data;
    },
};