
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
        value: function(state) {
          return 'test';
          // return state.geocode.data.properties.high_school;
        },
        description: function(state) {
          return 'test2';
          // return state.geocode.data.properties.zoning;
          // return ZONING_CODE_MAP[code];
        },
      },
    },
    {
      type: 'checkbox-set',
      options: {
        topicLayers: [
          {
            // title: 'PWDWaterRepairs_Public',
            title: 'ProblemReports - Point layer',
            options: {
              shouldShowSlider: false,
            },
          },
        ],
        defaultTopicLayers: [
          // 'Construction Status',
          // 'PWDWaterRepairs_Public',
          'PWD_ProblemReports - Point layer',
        ],
        shouldShowDataLinks: false,
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
