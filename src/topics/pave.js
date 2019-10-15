export default {
  key: "pave",
  icon: "road",
  label: "PavePHL",
  components: [
    {
      type: 'paragraph',
      slots: {
        text: 'View status of paving operations.'
      }
    },
    {
      type: "radio-button-set",
      options: {
        topicLayers: [
          {
            title: "Streets Status for Paving Season",
            options: {
              shouldShowSlider: false
            }
          },
          {
            title: "Street Condition Index",
            options: {
              shouldShowSlider: false
            }
          },
          {
            title: "Most Recent Milling List",
            options: {
              shouldShowSlider: false,
              components: [
                {
                  type: "popover-link",
                  options: {
                    height: "35%",
                    components: [
                      {
                        type: "horizontal-table",
                        options: {
                          id: "tableMillPave",
                          inPopover: true,
                          fields: [
                            {
                              label: "Hundred Block",
                              value: function(state, item) {
                                return item.Hundred;
                              }
                            },
                            {
                              label: "On Street",
                              value: function(state, item) {
                                return item.OnStreet;
                              }
                            },
                            {
                              label: "From Street",
                              value: function(state, item) {
                                return item.FromStreet;
                              }
                            },
                            {
                              label: "To Street",
                              value: function(state, item) {
                                return item.ToStreetNa;
                              }
                            }
                          ],
                          sort: {
                            // this should return the val to sort on
                            getValue: function(item) {
                              // return item.attributes.RECORDING_DATE;
                              return item.OnStreet;
                            },
                            // asc or desc
                            order: "asc"
                          }
                        },
                        slots: {
                          title: "Most Recent Milling List",
                          items: function(state) {
                            var weekMillData = [];

                            if (state.sources.weekMill.data) {
                              state.sources.weekMill.data.forEach(function(
                                item
                              ) {
                                weekMillData.push(item.properties);
                              });
                            }

                            return weekMillData;
                          }
                        }
                      },
                      {
                        type: "SpanComp",
                        slots: {
                          text: function(state){
                              var msg = '';
                              if (state.sources.weekMill.data.length < 1)
                              {
                                 msg = 'There is no planned work for this week.';
                              }

                             return msg;
                          }
                        }
                      }
                    ]
                  },
                  slots: {
                    shouldShowValue: false,
                    value: "Click to see Most Recent Milling List"
                  }
                }
              ]
            }
          },
          {
            title: "Most Recent Paving List",
            options: {
              shouldShowSlider: false,
              components: [
                {
                  type: "popover-link",
                  options: {
                    height: "35%",
                    components: [
                      {
                        type: "horizontal-table",
                        options: {
                          id: "tableWeekPave",
                          inPopover: true,
                          fields: [
                            {
                              label: "Hundred Block",
                              value: function(state, item) {
                                return item.Hundred;
                              }
                            },
                            {
                              label: "On Street",
                              value: function(state, item) {
                                return item.OnStreet;
                              }
                            },
                            {
                              label: "From Street",
                              value: function(state, item) {
                                return item.FromStreet;
                              }
                            },
                            {
                              label: "To Street",
                              value: function(state, item) {
                                return item.ToStreetNa;
                              }
                            }
                          ],
                          sort: {
                            // this should return the val to sort on
                            getValue: function(item) {
                              // return item.attributes.RECORDING_DATE;
                              return item.OnStreet;
                            },
                            // asc or desc
                            order: "asc"
                          }
                        },
                        slots: {
                          title: "Most Recent Paving List",
                          items: function(state) {
                            var weekPaveData = [];
                            if (state.sources.weekPave.data) {
                              state.sources.weekPave.data.forEach(function(
                                item
                              ) {
                                weekPaveData.push(item.properties);

                              });
                            }
                                return weekPaveData;
                          }
                        }
                      },
                      {
                        type: "SpanComp",
                        slots: {
                          text: function(state){
                              var msg = '';
                              if (state.sources.weekPave.data.length < 1)
                              {
                                 msg = 'There is no planned work for this week.';
                              }

                             return msg;
                          }
                        }
                      }
                    ]
                  },
                  slots: {
                    shouldShowValue: false,
                    value: "Click to see Most Recent Paving List"
                  }
                }
              ]
            }
          }
        ],
        defaultTopicLayers: ["Streets Status for Paving Season"],
        shouldShowDataLinks: false
      }
    },
    {
      type: "division",
      options: {
        style: {
          background: '#f0f0f0',
          padding: '8px'
        },
        components: [
          {
            type: "paragraph",
            slots: {
              text:
              '<h5><b>Paving Steps</b></h5>\
              <b>Step 1 Milling</b>\
              <br>Milling is the process of grinding off the top layer of asphalt or surface of a roadway. This is usually done in preparation for paving. Contractors, will if needed, tow vehicles to a nearby street, so it is important to not park on a street that is about to be milled.\
              <br><br><b>Step 2 Street Adjustments</b>\
              <br>After asphalt is milled off, utility manholes and castings are prepped and/or replaced by the contractor prior to performing the resurfacing operations on a project.\
              <br><br><b>Step 3 Street Paving</b>\
              <br>City crews provide a new layer of asphalt surface on the streets to protect the underlying road structure and improve the quality of the ride. Residents are required to move their car during these workdays.\
              <br><br><b>Step 4 Street Linestriping</b>\
              <br>The installation of placement markings and crosswalks is the final phase. Road surface markings are used on paved roadways to provide guidance and information to drivers and pedestrians. Striping is done over a series of days/weeks.\
              <p><br><a target="blank" href="https://philadelphiastreets.com/images/uploads/documents/24040pro-PavingBooklet-8_5x11-SinglePage.pdf">Click to download</a> the new Paving Booklet.'
            }
          }
        ]
      },
    }
  ]
};
