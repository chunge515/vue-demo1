<template>
  <div>
    这是一个模板
    <br>
    <el-button @click="next">跳转param</el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "何杰",
      sex: "男"
    };
  },
  created() {},
  methods: {
    next() {
      this.$router.push({
        path: "/param47",
        query:{
            name: this.name,
            sex: this.sex
            }
        // name: 'hejie',
        // params:{
        // id:this.name
        // }
      });
    }
  },
  computed: {},
  filters: {}
};
</script>

<style lang="sass" scoped>

</style>


