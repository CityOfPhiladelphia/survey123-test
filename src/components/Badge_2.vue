<template>
  <!-- REVIEW this uses patterns -->
  <div class="center">
    <div class="mb-badge panel">
      <div
        :style="style"
        class="mb-badge-header"
      >
        {{ evaluateSlot(slots.title) }}
      </div>
      <div class="mb-badge-body">
        <p>this is the new part</p>
        <h1>{{ evaluateSlot(slots.value) }}</h1>
        <strong>{{ evaluateSlot(slots.description) }}</strong>
      </div>
    </div>
    <!-- <external-link
      v-if="options && options.externalLink"
      :options="options.externalLink"
      :type="'badge'"
    /> -->
    <!-- <div class="external-link">
      <a v-if="options && options.externalLink"
      :href="externalLinkHref"
      class="external external-link"
      target="_blank"
      >
      {{ externalLinkText }}
      </a>
    </div> -->
  </div>
</template>

<script>
// console.log('in Badge.vue script');
import TopicComponent from '@phila/vue-comps/src/components/TopicComponent.vue';
// import TopicComponent from './TopicComponent.vue';
// import ExternalLink from './ExternalLink.vue';

export default {
  name: 'Badge2',
  // components: {
  //   ExternalLink,
  // },
  mixins: [ TopicComponent ],
  computed: {
    style() {
      let titleBackground = this.evaluateSlot(this.slots.titleBackground);
      // const titleBackgroundValOrFn = (this.slots || {}).titleBackground;
      // let titleBackground;
      //
      // if (titleBackgroundValOrFn) {
      //   console.log('titleBackgroundValOrFn', titleBackgroundValOrFn)
      //   if (typeof titleBackgroundValOrFn === 'function') {
      //     titleBackground = titleBackgroundValOrFn(this.$store.state);
      //   } else {
      //     titleBackground = titleBackgroundValOrFn;
      //   }
      // } else {
      //   titleBackground = '#444';
      // }
      //
      return { background: titleBackground };
    },
    // externalLinkAction() {
    //   return this.evaluateSlot(this.options.externalLink.action) || 'See more at ';
    // },
    // externalLinkText() {
    //   const externalLinkConf = this.options.externalLink;
    //   const actionFn = externalLinkConf.action;
    //   const name = this.externalLinkAction || '';
    //   return `${name}`;
    // },
    // externalLinkHref() {
    //   return this.evaluateSlot(this.options.externalLink.href);
    // },
  },
};
</script>

<style scoped>
  .mb-badge {
    /*width: 300px;*/
    padding: 0;
    margin: 0 auto;
    /* margin-bottom: inherit; */
    margin-bottom: 10px;
  }

  @media (max-width: 640px) {
    .mb-badge {
      width: 100%;
    }
  }

  /*REVIEW this should use foundation classes*/
  @media (min-width: 640px) {
    .mb-badge {
      width: 325px;
    }
  }

  .mb-badge-header {
    color: #fff;
    font-weight: bold;
    text-align: center;
    padding-top: 2px;
    padding-bottom: 2px;
  }

  .mb-badge-body {
    padding: 12px;
  }

  .mb-badge-body > h1 {
    margin: 0;
    margin-bottom: 5px;
  }
</style>
