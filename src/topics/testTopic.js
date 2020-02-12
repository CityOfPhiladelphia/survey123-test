export default {
  key: 'testTopic',
  icon: 'anchor',
  label: 'test topic',
  components: [
    {
      type: 'callout',
      slots: {
        text: '\
          test callout\
         ',
      },
    },
    {
      type: 'vertical-table',
      slots: {
        fields: [
          {
            label: 'OPA Account #',
            value: function(state) {
              let value;
              if (state.geocode.data) {
                value = state.geocode.data.properties.opa_account_num;
              } else {
                value = null;
              }
              return value;
            },
          },
        ],
      },
    },
  ],
};
