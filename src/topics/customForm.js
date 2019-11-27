
export default {
  key: 'customform',
  icon: 'scroll',
  label: 'Custom Form',
  components: [
    {
      type: 'badge2',
      slots: {
        title: 'test badge',
        titleBackground: '#58c04d',
        value: function() {
          return 'test';
          // return state.geocode.data.properties.high_school;
        },
        description: function() {
          return 'test2';
          // return state.geocode.data.properties.zoning;
          // return ZONING_CODE_MAP[code];
        },
      },
    },
    {
      type: 'locationForm',
      // slots: {
      //   text: 'Click on the map to show the problem location',
      // },
    },
  ],
};
