export default {
  key: 'linkedSurvey',
  icon: 'poll-h',
  label: 'Linked Survey123',
  components: [
    {
      type: 'external-link',
      options: {
        action: function() {
          return 'See more at Vacancy Property Viewer';
        },
        data: 'Survey Link',
        href: function(state) {
          if (state.geocode.data) {
            if (state.geocode.data.properties) {
              return 'https://survey123.arcgis.com/share/602fe37120d84ffba847d6229a355c21?field:opa_number=' + state.geocode.data.properties.opa_account_num
                      + '&field:address_fills_out_when_you_clic=' + state.geocode.data.properties.street_address;
            }
          } else {
            return 'https://survey123.arcgis.com/share/602fe37120d84ffba847d6229a355c21';
          }
        },
      }
    },
  ],
};
