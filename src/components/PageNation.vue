<template>
  <div>
    <button v-if="nowPage > 1" @click="()=>onPageChange(nowPage - 1)">&lt;</button>
    <button v-for="(page, index) in pageList" :key="index" @click="()=>onPageChange(page)">{{page}}</button>
    <button v-if="nowPage < lastPage()" @click="()=>onPageChange(nowPage + 1)">&gt;</button>
  </div>
</template>
<script>
export default {
  name: 'PageNation',
  props: ['nowPage', 'total'],
  data(){
    return {
      pageList: []
    }
  },
  methods: {
    // total = 1 10 11 20 21 100 101
    // lastPage = 1 1 2 2 3 10 11
    lastPage(){
      return Math.ceil(this.total / 10);
    },
    // nowPage = 1 10 11 20 21 100 101
    // startPage = 1 1 11 11 21 91 101
    startPage(){
      return Math.ceil(this.nowPage / 10) * 10 - 9;
    },
    // nowPage = 1 10 11 20 21 100 101
    // endPage = 10 10 20 20 30 100 110
    endPage(){
      return this.startPage() + 9 > this.lastPage() ? this.lastPage() : this.startPage() + 9;
    },
    onPageChange(page){
      this.$emit('onPageChange', page)
    }
  },
  mounted(){
    this.lastPage();
    this.startPage();
    this.endPage();
    console.log(this.nowPage);
    console.log(this.total);
    console.log(this.startPage());
    console.log(this.lastPage());
    console.log(this.endPage());
    for (let i = this.startPage(); i <= this.endPage(); i++) {
      this.pageList.push(i);
    }
    console.log(this.pageList);
  }
}
</script>
<style scoped>

</style>