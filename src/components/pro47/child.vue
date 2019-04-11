<template>
  <div>
    <div>你好，{{getName}} 传值</div>
    <div>你的年龄是：{{age}}岁</div>
    <div>你的名字是：{{name}}</div>
    <el-button @click="toFa">子向父传值</el-button>
    <el-button @click="toBro">向兄弟传值</el-button>
  </div>
</template>

<script>
// import child from "./child.vue";
import bus from "@/assets/bus";
export default {
  components: {},
  props: ["getName", "age", "name"],
  data() {
    return {
      childName: "张三",
      info: {
        sc: "清华大学",
        name: "李四"
      }
    };
  },
  created() {
    // console.log(this.info.sc);
    //  bus.$emit("data", this.info);
    bus.$off("data");
  },
  methods: {
    //   向父亲传值
    toFa() {
      this.$emit("cN", this.childName);
    },
    // 向兄弟=传值
    toBro() {
      this.$router.push({ path: "/brother" });
    }
  },
  // bus传值
  beforeDestroy() {
    bus.$emit("data", this.info);
  },
  computed: {},
  filters: {}
};
</script>

<style lang="sass" scoped>

</style>


