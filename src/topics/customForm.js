// const ZONING_CODE_MAP = {
//   'RSD-1': 'Residential Single Family Detached-1',
//   'RSD-2': 'Residential Single Family Detached-2',
//   'RSD-3': 'Residential Single Family Detached-3',
//   'RSA-1': 'Residential Single Family Attached-1',
//   'RSA-2': 'Residential Single Family Attached-2',
//   'RSA-3': 'Residential Single Family Attached-3',
//   'RSA-4': 'Residential Single Family Attached-4',
//   'RSA-5': 'Residential Single Family Attached-5',
//   'RTA-1': 'Residential Two-Family Attached-1',
//   'RM-1': 'Residential Multi-Family-1',
//   'RM-2': 'Residential Multi-Family-2',
//   'RM-3': 'Residential Multi-Family-3',
//   'RM-4': 'Residential Multi-Family-4',
//   'RMX-1': 'Residential Mixed-Use-1',
//   'RMX-2': 'Residential Mixed-Use-2',
//   'RMX-3': 'Residential (Center City) Mixed-Use-3',
//   'CA-1': 'Auto-Oriented Commercial-1',
//   'CA-2': 'Auto-Oriented Commercial-2',
//   'CMX-1': 'Neighborhood Commercial Mixed-Use-1',
//   'CMX-2': 'Neighborhood Commercial Mixed-Use-2',
//   'CMX-2.5': 'Neighborhood Commercial Mixed-Use-2.5',
//   'CMX-3': 'Community Commercial Mixed-Use',
//   'CMX-4': 'Center City Commercial Mixed-Use',
//   'CMX-5': 'Center City Core Commercial Mixed-Use',
//   'I-1': 'Light Industrial',
//   'I-2': 'Medium Industrial',
//   'I-3': 'Heavy Industrial',
//   'IP': 'Port Industrial',
//   'ICMX': 'Industrial Commercial Mixed-Use',
//   'IRMX': 'Industrial Residential Mixed-Use',
//   'SPENT': 'Commercial Entertainment (Casinos)',
//   'SPAIR': 'Airport',
//   'SPINS': 'Institutional Development',
//   'SPSTA': 'Stadium',
//   'SPPOA': 'Recreation',
//   'SP-PO-A': 'Recreation',
//   'SPPOP': 'Recreation',
// };

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
          // return 'test';
          return state.geocode.data.properties.high_school;
        },
        description: function(state) {
          // return 'test2';
          return state.geocode.data.properties.zoning;
          // return ZONING_CODE_MAP[code];
        },
      },
    },
    {
      type: 'checkbox-set',
      options: {
        topicLayers: [
          {
            title: 'PWDWaterRepairs_Public',
            options: {
              shouldShowSlider: false,
            },
          },
          // {
          //   title: 'Current Closures (segments)',
          //   options: {
          //     shouldShowSlider: false,
          //   }
          // },
          // {
          //   title: 'Future Closures (points)',
          //   options: {
          //     shouldShowSlider: false,
          //   }
          // },
          // {
          //   title: 'Future Closures (segments)',
          //   options: {
          //     shouldShowSlider: false,
          //   }
          // }
        ],
        defaultTopicLayers: [
          'Current Closures (points)',
          'Current Closures (segments)',
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
