<template>
  <div>
    <!-- 背景 -->

     <Snow v-if="message=='1'"/>
    <Skuare v-if="message=='2'"/>
    <Flower v-if="message=='3'"/>
    <Autumn v-if="message=='4'"/>
<!-- 主页 -->
              <div class="main_tabs">
              <div class="tabs">
               <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="主页" name="first"><Homepage/></el-tab-pane>
    <el-tab-pane label="我的主页" name="second"><myRoom/></el-tab-pane>
    <el-tab-pane label="个性化" name="third"><personIndividuation/></el-tab-pane>
    <el-tab-pane label="个人资料" name="fourth"><personData/></el-tab-pane>
    <el-tab-pane label="隐私设置" name="five"><privacySetting/></el-tab-pane>
    <el-tab-pane label="消息" name="six"><news/></el-tab-pane>
  </el-tabs>
              </div> 
              </div>
  </div>
</template>

<script>
import Snow from './snow.vue'
import Skuare from './skuare.vue'
import Flower from './flower.vue'
import Autumn from './autumn.vue'
import Homepage from '../components/homepage.vue'
import myRoom from '../components/homepage/myRoom.vue'
import  news from '../components/homepage/news.vue'
import  personData from '../components/homepage/personData.vue'
import  personIndividuation from '../components/homepage/personIndividuation.vue'
import  privacySetting from '../components/homepage/privacySetting.vue'
 export default {
  name: 'App',
  components: {
    Snow,
    Skuare,
    Flower,
    Autumn,
Homepage,
myRoom,
news,
personData,
personIndividuation,
privacySetting
  },
  data() {
    return {
        message:'3',
         activeName: 'second'
                       
    }
  },
  methods: {
    handleSelect(key, keyPath) {
      },
         handleClick(tab, event) {
        console.log(tab, event);
      }
  }
}
</script>

<style scoped>
body,html{
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}
.el-button{
  font-size: 0.3rem !important;
  padding: 0.1rem !important;
}
.main_tabs{
  display: flex;
  justify-content:center;
  align-items: center;
}
.tabs{
  width: 9.5rem;
}
.el-tabs__item{
width: 3rem !important;
background-color: aquamarine;
}
</style>


