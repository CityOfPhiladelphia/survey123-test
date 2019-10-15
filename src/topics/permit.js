export default {
  key: 'permit',
  icon: 'scroll',
  label: 'PermitPHL',
  components: [
    {
      type: 'paragraph',
      slots: {
        text: 'View street and sidewalk closure permits.'
      }
    },
    {
      type: 'checkbox-set',
      options: {
        topicLayers: [
          {
            title: 'Current Closures (points)',
            options: {
              shouldShowSlider: false,
            }
          },
          {
            title: 'Current Closures (segments)',
            options: {
              shouldShowSlider: false,
            }
          },
          {
            title: 'Future Closures (points)',
            options: {
              shouldShowSlider: false,
            }
          },
          {
            title: 'Future Closures (segments)',
            options: {
              shouldShowSlider: false,
            }
          }
        ],
        defaultTopicLayers: [
          'Current Closures (points)',
          'Current Closures (segments)'
        ],
        shouldShowDataLinks: false
      }
    },
    {
      type: 'paragraph',
      slots: {
          text:  'Click to take the following actions:\
                  <ol>\
                    <li><a target="blank" href="https://stsweb.phila.gov/streetclosure/">- Apply for a permit</a></li>\
                    <li><a target="blank" href="http://iframe.publicstuff.com/#/?client_id=242&request_type_id=1012280">- Submit a Right-of-Way Violation 311 Request</a></li>\
                    <li><a target="blank" href="http://stsweb.phila.gov/permitPHL/FAQ.pdf">- Download the frequently asked questions (FAQ) doc</a></li>\
                  </ol>'
      }
    },
    // {
    //   type: 'paragraph',
    //   slots: {
    //     text: '<a target="blank" href="http://stsweb.phila.gov/permitPHL/FAQ.pdf">Click to download</a>\
    //           the frequently asked questions (FAQ) doc.',
    //   }
    // },
  ]
}
