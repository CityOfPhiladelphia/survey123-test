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
      @click="clickButton"
    >
      Set Problem Location
    </button>
    <div>
      <p>latitude: {{ lat }}</p>
      <p>longitude: {{ lng }}</p>
    </div>
  </div>
</template>

<script>
export default {
  components: {
  },
  computed: {
    lat() {
      return this.$store.state.map.clickMarkerLocation.lat.toFixed(3);
    },
    lng() {
      return this.$store.state.map.clickMarkerLocation.lng.toFixed(3);
    },
  },
  methods: {
    clickButton() {
      this.$store.commit('setMapMode', 'clickMarker');
    }
  },
};
</script>

<style scoped>

.marker-button {
  padding: 10px;
}

</style>
