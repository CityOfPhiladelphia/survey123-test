<!--
<div class="embed-container"><iframe name="survey123webform" width="500" height="400" frameborder="0" marginheight="0" marginwidth="0" title="LayerboardTest" src="//survey123.arcgis.com/share/602fe37120d84ffba847d6229a355c21?hide=navbar,header,footer,theme,description"></iframe></div><script>var survey123webform = document.getElementsByName('survey123webform')[0];window.addEventListener("message",e=>{if(e.data){var t=JSON.parse(e.data);"survey123:onFormLoaded"===t.event&&t.contentHeight&&(survey123webform.parentNode.style.height=t.contentHeight+"px")&&(survey123webform.parentNode.style["padding-bottom"]="unset")}});</script>
-->

<template>
  <div class="embed-container">
    <iframe
      name="survey123webform"
      width="500"
      height="600"
      frameborder="0"
      marginheight="0"
      marginwidth="0"
      title="LayerboardTest"
      src="//survey123.arcgis.com/share/602fe37120d84ffba847d6229a355c21?hide=navbar,header,footer,theme,description">
    </iframe>
  </div>
</template>

<script>

  export default {
    name: 'TestEmbed',
    mounted() {
      var survey123webform = document.getElementsByName('survey123webform')[0];
      window.addEventListener(
        "message", e=> {
          if(e.data){
            var t=JSON.parse(e.data);
            "survey123:onFormLoaded"===t.event
            &&t.contentHeight
            &&(survey123webform.parentNode.style.height=t.contentHeight+"px")
            &&(survey123webform.parentNode.style["padding-bottom"]="unset")
          }
        }
      );
    },
    computed: {
      mapScale() {
        return this.$store.state.map.scale;
      }
    }
  }

</script>


<style>

.embed-container {
  position: relative;
  height: 1750px;
  padding-bottom:80%;
  max-width: 100%;
}

.embed-container iframe, .embed-container object, .embed-container iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  /* height: 100%; */
  height: 1750px;
}

small {
  position: absolute;
  z-index: 40;
  bottom: 0;
  margin-bottom: -15px;
}

</style>
