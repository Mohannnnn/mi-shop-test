<template>
  <div>
      <span>{{ id }}</span>
      <component :is="activeComponent"></component>
  </div>
</template>

<script>
export default {
  name: "index",
  data() {
    return {
      activeComponent : 'h-page1',
      title: "titles"
    };
  },
  props : ['id'],
  components: {
    'h-page1' : (resolve) => require.ensure([] , () => resolve(require('@/views/home/page1'))),
    'h-page2' : (resolve) => require.ensure([] , () => resolve(require('@/views/home/page2')))
  },
  computed: {},
  watch: {
    '$route'(to, from) {
      if(to.params.id) {
          this.activeComponent = `h-${to.params.id}`;
      }
    }
  },
  methods: {},
  beforeMount() {
    
  },
  mounted() {}
};
</script>
<style lang='scss' scoped>
</style>