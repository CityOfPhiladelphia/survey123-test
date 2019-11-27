export default {
  key: 'layers',
  icon: 'scroll',
  label: 'Layers',
  components: [
    {
      type: 'checkbox-set',
      options: {
        topicLayers: [
          {
            title: 'Water Repairs',
            options: {
              shouldShowSlider: false,
            },
          },
          {
            title: 'Street Closures',
            options: {
              shouldShowSlider: false,
            },
          },
          {
            title: 'Problem Reports',
            options: {
              shouldShowSlider: false,
            },
          },
          {
            title: 'Cipit Points',
            options: {
              shouldShowSlider: false,
            },
          },
          {
            title: 'Cipit Projects',
            options: {
              shouldShowSlider: false,
            },
          },
          {
            title: 'Cipit Parcels',
            options: {
              shouldShowSlider: false,
            },
          },
        ],
        // defaultTopicLayers: [
        //   'Public - Point layer',
        // ],
        shouldShowDataLinks: false,
      },
    },
  ],
};
