<template>
  <div>
    <!-- <div class="flex-div">
      <div
        class="main-div"
      >

      </div>
    </div> -->
    <button
      class="marker-button"
      @click="startPoint"
    >
      Set Problem Location
    </button>
    <div>
      <p>latitude: {{ lat }}</p>
      <p>longitude: {{ lng }}</p>
    </div>
    <button
      class="marker-button"
      @click="submitMarker"
    >
      Submit
    </button>
  </div>
</template>

<script>

import axios from 'axios';
import { addFeatures } from '@esri/arcgis-rest-feature-layer';

export default {
  components: {
  },
  computed: {
    lat() {
      let value;
      if (this.$store.state.map.clickMarkerLocation.lat) {
        value = this.$store.state.map.clickMarkerLocation.lat.toFixed(3);
      } else {
        value = null;
      }
      return value;
    },
    lng() {
      let value;
      if (this.$store.state.map.clickMarkerLocation.lng) {
        value = this.$store.state.map.clickMarkerLocation.lng.toFixed(3);
      } else {
        value = null;
      }
      return value;
    },
  },
  methods: {
    startPoint() {
      this.$store.commit('setMapMode', 'clickMarker');
    },
    submitMarker() {
      console.log('submitMarker is running');
      addFeatures({ url: 'https://services.arcgis.com/fLeGjb7u4uXqeF9q/arcgis/rest/services/layerboard_test/FeatureServer/0/addFeatures',
        // token: '4QMbSzmB7M_XXVd_CNghWs7InQrgKGMjlb60u-J2g77SXQ_ZzBTRWFt_RuOrBSNlcdjFlzY9JbLfpe9XDUe53EhJ3bNGiXr_2XK7JwzA9cRmtOKJAWJpUkclLEWr9QLvAmCFMaMnXysgxJoK1R9pp1wAyvVpK3ZtQQCeOJWAC0nRIPxtkhFAsvQhMo01RKgFkytiheQ7gwsApaVaPB5YB_iUJ6wvKqFWevxHawbWQa7uFnIB-kv0xuGJIzdd0tz3',
        f: 'pjson',
        features: [
          {
            "geometry" : { "x" : -75.163471, "y" : 39.953338 },
            "attributes" : {
              "problemType" : "fromApp2"
            }
          }
        ]
      })
      .then(function (response) {
        console.log('response:', response);
      })
      .catch(function (error) {
        console.log('error:', error);
      })
      // axios.post('https://services.arcgis.com/fLeGjb7u4uXqeF9q/arcgis/rest/services/layerboard_test/FeatureServer/0/addFeatures', {
      //   // token: '4QMbSzmB7M_XXVd_CNghWs7InQrgKGMjlb60u-J2g77SXQ_ZzBTRWFt_RuOrBSNlcdjFlzY9JbLfpe9XDUe53EhJ3bNGiXr_2XK7JwzA9cRmtOKJAWJpUkclLEWr9QLvAmCFMaMnXysgxJoK1R9pp1wAyvVpK3ZtQQCeOJWAC0nRIPxtkhFAsvQhMo01RKgFkytiheQ7gwsApaVaPB5YB_iUJ6wvKqFWevxHawbWQa7uFnIB-kv0xuGJIzdd0tz3',
      //   f: 'pjson',
      //   features: [
      //     {
      //       "geometry" : { "x" : -75.163471, "y" : 39.953338 },
      //       "attributes" : {
      //         "problemType" : "fromApp"
      //       }
      //     }
      //   ]
      // })
      // .then(function (response) {
      //   console.log('response:', response);
      // })
      // .catch(function (error) {
      //   console.log('error:', error);
      // })
    }
  },
};
</script>

<style scoped>

.marker-button {
  padding: 10px;
}

</style>
