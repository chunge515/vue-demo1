<template>
  <div>
    <div>
      <p>这是父组件</p>
      <child getName='父到子' age='18' :name='nn' @cN="toCh"></child>
        <p>儿子的名字是:{{childName}}</p>
        <!-- <brother></brother> -->
    </div>
  </div>
</template>

<script>
import child from "./child.vue";
import brother from './brother.vue'
export default {
  components: {
    child,
    brother
  },
  data() {
    return {
        nn:"张三",
        childName: "",
        school: "清华大学",
    };
  },
  created() {},
  methods: {
      toCh(e){
          this.childName = e;
      }
  },
  computed: {},
  filters: {}
};
</script>

<style lang="sass" scoped>

</style>


