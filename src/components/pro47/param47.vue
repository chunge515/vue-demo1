<template>
    <div>
        <!-- 利用param传参； -->
        <div>
            my name is {{getName}}
        <div>
            my sex is {{getSex}}
        </div>
        <el-button @click="goBack">
            返回上一级
        </el-button>
        </div>
    </div>
</template>

<script>
export default {
    data (){
        return {
            getName:"",
            getSex:""
        }
    },
    created(){
       this.getName =  this.$route.query.name;
       this.getSex = this.$route.query.sex;
    // this.getName = this.$route.params.id
    // this.getSex = this.$route.params.sex
       console.log(this.getName)
       console.log(this.getSex);
    },
    methods:{
goBack(){
    this.$router.push({path:"/pro47"})
}
    },
    computed:{

    },
    filters:{

    },
}
</script>

<style lang="sass" scoped>

</style>


