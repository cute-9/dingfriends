<template>
    <!-- 主页-->
      <div class="textScroll">
       <div v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="10">
            <div v-for="item in data" :key="item.index">{{item.name}}</div>
          </div> 
</div>
</template>

<script>
export default {
name:'Homepage',
data () {
    return {
      count: 0,
      data: [],
      busy: false
    }
  },
   methods: {
    loadMore: function() {
      this.busy = true
      setTimeout(() => {
        for (var i = 0, j = 10; i < j; i++) {
          this.data.push({name: this.count++ })
        }
        console.log(this.data)
        this.busy = false
      }, 1000)
    }
  }
}
</script>

<style> 
body,html{
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}
.header{
  width: 100%;
  height: 2rem;
  /* background-color: rgb(92, 182, 241); */
}
.textScroll{
   display: inline-block;
    position: fixed;
    top:2rem;
    bottom: 0;
    left: 0;
    margin: auto;
    overflow: scroll;
    right: 0;
    width: 90%;
    /* height: 10rem; */
    /* margin-bottom: 4.7rem; */
    z-index: 1;
    /* background-color:rgba(240, 249, 255, 0.2); */
}
.textScroll::-webkit-scrollbar {display:none}
P{
    font-size: .4rem;
    color: #000;
}

</style>