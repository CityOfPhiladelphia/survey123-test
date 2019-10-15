<template>
  <div>
    <div class="flex-div">
      <div class="main-div"
           :style="minWidth"
      >
        <!-- <div class="maintenance-div">
          <p>Note: This site may down at different points for scheduled maintenance from 8:00 am to 12:00 pm on Sunday, 3/24/2019</p>
        </div> -->
        <div class="top-div small-centered">
          <h2><b>StreetSmartPHL</b></h2>
        </div>
        <div class="bottom-div">
          <div class="columns small-24 small-centered medium-24">
            <p>
              Welcome to the City of Philadelphia Streets Department’s StreetSmartPHL Platform. StreetSmartPHL answers the question, 
              “Are you Street Smart?” by connecting residents and stakeholders to real-time information related to permits, paving, 
              snow plowing, and daily trash and recycling collections. StreetSmartPHL is the City’s first online “smart” tool designed 
              to give residents, visitors and businesses direct access to the Streets Department’s core services. 
            </p>
            <p>
              The data in this application refreshes every hour, so you may see the data refresh at these intervals.
            </p>
             <p>
                <input type="checkbox" id="showAgain" :checked="notShowAgain" @click='notShowSplashScreen()'>
                <label for="showAgain">Do not show again</label>
            </p>
            <a @click="close" class="button full-width uniform-font">Continue To Site</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {
  },
  data(){
    return {
      notShowAgain: localStorage.notShowAgain == 'true' ? true : false
    }
  },
  computed: {
    minWidth() {
      if (this.$store.state.isMobileOrTablet) {
        return;
      } else {
        return { minWidth: '550px' };
      }
    }
  },
  methods: {
    close() {
      this.$store.commit('setPopoverOpen', false);
      this.$store.commit('setPopoverOptions', {});
      this.$store.commit('setPopoverText', '');
    },

    notShowSplashScreen() {
      if (localStorage.notShowAgain=='true') {
          localStorage.notShowAgain = 'false';
      }
      else
      {
        localStorage.notShowAgain = 'true';
      }
    }
  }
}
</script>

<style scoped>
a {
  color: white !important;
  margin: 5px;
}
.uniform-font {
  font-size: 14px;
}
.flex-div {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.maintenance-div {
  background: #f4eb42;
  color: black;
}
.main-div {
  /* display: flex;
  flex-direction: column; */
  min-height: 300px;
  /* min-width: 500px; */
  max-width: 700px;
  text-align: center;
}
.top-div {
  /* height: 60%; */
  padding: 10px;
  background: #2176d2;
}
.bottom-div {
  border-style: solid;
  border-width: 5px;
  border-color: #2176d2;
  /* height: 40%; */
  padding: 10px;
  background: white;
  color: black;
}
.disclaimer {
  font-size: 14px;
}
</style>