
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
library.add(faSnowflake, faScroll, faTrashAlt, faPollH, faRoad);

import layerboard from '@philly/layerboard/src/main.js';

// data-sources
import weekPave from './data-sources/week-pave';
import weekMill from './data-sources/week-mill';

// Topics
import customForm from './topics/customForm';
import embeddedSurvey from './topics/embeddedSurvey123';
import linkedSurvey from './topics/linkedSurvey123';

import instructions from './components/Instructions.vue';
import embeddedSurvey123 from './components/EmbeddedSurvey123.vue';
import locationForm from './components/LocationForm.vue';

const customComps = {
  'helpInstructions': instructions,
  'embeddedSurvey123': embeddedSurvey123,
  'locationForm': locationForm,
};

var BASE_CONFIG_URL = 'https://cdn.jsdelivr.net/gh/cityofphiladelphia/layerboard-default-base-config@8e227b2abe04a0dee3a327ccab9d7dc49e1b6354/config.js';
var GATEKEEPER_KEY = 'ec8681f792812d7e3ff15e9094bfd4ad';
var WEBMAP_ID = 'e12f33308a8742df827f33a8408a6d07';

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
    // splashScreen,
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
      containerClass: 'map-container-type2',
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
    gatekeeperKey: GATEKEEPER_KEY,
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
