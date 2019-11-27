export default {
  key: 'activeEmergencyRepairs',
  icon: 'scroll',
  label: 'Active Emergency Repairs',
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
            title: 'Public - Point layer',
            options: {
              shouldShowSlider: false,
            },
          },
        ],
        defaultTopicLayers: [
          'Public - Point layer',
        ],
        shouldShowDataLinks: false,
      },
    },
  ],
};
