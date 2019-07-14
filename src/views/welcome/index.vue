<template>
    <div class="continer">
        <img src="../../assets/images/welcome.jpg" alt="">
    </div>
</template>
<script>
export default {
  created () {
    this.axios.get('articles').then(res => console.log(res.data))
  }
}
</script>
<style lang="less">
    .continer {
        text-align: center;
    }
</style>
