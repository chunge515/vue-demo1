<template>
  <div>
    <p>{{name}}的母校是{{school}}</p>
  </div>
</template>

<script>
import bus from "@/assets/bus";
export default {
  data() {
    return {
      name: "",
      school: ""
    };
  },
  created() {
    var that = this;
    bus.$on("data", data => {
      console.log(data);
      that.name = data.sc;
      that.school = data.name;
      console.log(that.name);
      console.log(that.school);
    });
  },
  computed: {},
  filters: {},
  mounted() {
    
  },
  methods: {},
  destroyed(){
      bus.$off("data")
  }
};
</script>

<style lang="sass" scoped>

</style>


