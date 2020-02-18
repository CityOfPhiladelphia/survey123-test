/*
                                        ____________  ________             __                   __
________ ____________  __ ____ ___.__. /_   \_____  \ \_____  \          _/  |_  ____   _______/  |_
/  ___/  |  \_  __ \  \/ // __ <   |  |  |   |/  ____/   _(__  <   ______ \   __\/ __ \ /  ___/\   __\
\___ \|  |  /|  | \/\   /\  ___/\___  |  |   /       \  /       \ /_____/  |  | \  ___/ \___ \  |  |
/____>____/ |__|    \_/  \___  > ____|  |___\_______ \/______  /          |__|  \___  >____  > |__|
*/

// turn off console logging in production
const { hostname='' } = location;
if (hostname !== 'localhost' && !hostname.match(/(\d+\.){3}\d+/)) {
  console.log = console.info = console.debug = console.error = function () {};
}

import { library } from '@fortawesome/fontawesome-svg-core';
import { faSnowflake } from '@fortawesome/free-solid-svg-icons/faSnowflake';
import { faScroll } from '@fortawesome/free-solid-svg-icons/faScroll';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons/faTrashAlt';
import { faPollH } from '@fortawesome/free-solid-svg-icons/faPollH';
import { faRoad } from '@fortawesome/free-solid-svg-icons/faRoad';
import { faAnchor } from '@fortawesome/free-solid-svg-icons/faAnchor';
library.add(faSnowflake, faScroll, faTrashAlt, faPollH, faRoad, faAnchor);

import layerboard from '@phila/layerboard/src/main.js';

// data-sources
import weekPave from './data-sources/week-pave';
import weekMill from './data-sources/week-mill';

// Topics
import customForm from './topics/customForm';
import embeddedSurvey from './topics/embeddedSurvey123';
import linkedSurvey from './topics/linkedSurvey123';
import layers from './topics/layers';
import testTopic from './topics/testTopic';

import instructions from './components/Instructions.vue';
import embeddedSurvey123 from './components/EmbeddedSurvey123.vue';
import locationForm from './components/LocationForm.vue';
import badge2 from './components/Badge_2.vue';

const customComps = {
  'badge2': badge2,
  'helpInstructions': instructions,
  'embeddedSurvey123': embeddedSurvey123,
  'locationForm': locationForm,
};

var BASE_CONFIG_URL = 'https://cdn.jsdelivr.net/gh/cityofphiladelphia/layerboard-default-base-config@50f224cec6c23f638d8303182bc3527e4cfc4399/config.js';
// var WEBMAP_ID = 'e12f33308a8742df827f33a8408a6d07';
// var WEBMAP_ID = '6358e390e9c34d5db565ff9f494b5311';
// var WEBMAP_ID = '02cdd87cbeb94d128ec4754005b02554';
// var WEBMAP_ID = 'f4a3c398635f4da2b476d6a973154ba1';
// var WEBMAP_ID = '99ac64fb5d9342599573ba3222f2f67f';
var WEBMAP_ID = '395b6bc66d4945bb854348f8889eaf4c';

let pictApiKey, pictSecretKey;
const host = window.location.hostname;
if (host === 'topicsmap-dev.s3-website-us-east-1.amazonaws.com') {
  pictApiKey = process.env.VUE_APP_DEV_PICTOMETRY_API_KEY;
  pictSecretKey = process.env.VUE_APP_DEV_PICTOMETRY_SECRET_KEY;
} else {
  pictApiKey = process.env.VUE_APP_PICTOMETRY_API_KEY;
  pictSecretKey = process.env.VUE_APP_PICTOMETRY_SECRET_KEY;
}

const notShowAgain = localStorage.notShowAgain == 'true' ? true : false;

// const popoverConfig = {
//   options: {
//     'height': '100%',
//     'components': [
//       {
//         'type': 'SplashScreen',
//       },
//     ],
//   },
// };

// const initialPopover = notShowAgain ? null : popoverConfig;

layerboard(
  {
    geocoder: {
      url: function (input) {
        var inputEncoded = encodeURIComponent(input);
        return '//api.phila.gov/ais/v1/search/' + inputEncoded;
      },
      params: {
        gatekeeperKey: process.env.VUE_APP_GATEKEEPER_KEY,
        include_units: true,
      },
    },
    customComps,
    footerContent: {
      components: [
        {
          type: 'PopoverLink',
          options: {
            height: '92%',
            customStyle: { 'color': 'white', 'border-bottom': '0px' },
            components: [
              {
                type: 'helpInstructions',
              },
            ],
          },
          slots: {
            shouldShowValue: false,
            value: 'Help',
          },
        },
        {
          type: 'Anchor',
          options: {
            text: 'Feedback',
            target: 'blank',
            customStyle: { 'color': 'white', 'border-bottom': '0px' },
            href: '//philagsg.typeform.com/to/PsVSGg',
          },
        },
      ],
    },
    bundled: true,
    layerFilter: false,
    router: {
      enabled: false,
    },
    geolocation: {
      enabled: true,
      icon: [ 'far', 'dot-circle' ],
    },
    addressInput: {
      width: 415,
      mapWidth: 300,
      position: 'right',
      autocompleteEnabled: false,
      autocompleteMax: 15,
      placeholder: 'Search the map',
    },
    map: {
      defaultBasemap: 'pwd',
      defaultIdentifyFeature: 'address-marker',
      imagery: {
        enabled: true,
      },
      historicBasemaps: {
        enabled: true,
      },
      center: [ -75.16347348690034, 39.952562122622254 ],
      clickToIdentifyFeatures: true,
      containerClass: 'map-container',
      basemaps: {},
    },
    cyclomedia: {
      enabled: true,
      measurementAllowed: false,
      popoutAble: true,
      recordingsUrl: 'https://atlas.cyclomedia.com/Recordings/wfs',
      username: process.env.VUE_APP_CYCLOMEDIA_USERNAME,
      password: process.env.VUE_APP_CYCLOMEDIA_PASSWORD,
      apiKey: process.env.VUE_APP_CYCLOMEDIA_API_KEY,
    },
    pictometry: {
      enabled: false,
      iframeId: 'pictometry-ipa',
      apiKey: pictApiKey,
      secretKey: pictSecretKey,
    },
    gatekeeperKey: process.env.VUE_APP_GATEKEEPER_KEY,
    baseConfig: BASE_CONFIG_URL,
    webmapId: WEBMAP_ID,
    defaultPanel: 'topics',
    dataSources:{
      weekPave,
      weekMill,
    },
    topics: [
      customForm,
      embeddedSurvey,
      linkedSurvey,
      layers,
      testTopic,
    ],
    // initialPopover,
    defaultTopic: null,
    components: [
      {
        type: 'paragraph',
        slots: {
          text: "<h2>Welcome to Survey123 Test Site</h2>\
          Testing Survey123",
        },
      },
      {
        type: 'topic-set',
      },
    ],
    modals: [ 'help' ],
  },
  //obj
);
