 <template>

  <div class="login-container">
    <!-- <img src="https://gitee.com/qian-cute/images/raw/master/images/snow1.png" id="bg" style="display:none" />
    <img src="https://gitee.com/qian-cute/images/raw/master/images/snow2.png" id="imgs1" style="display:none" />
    <img src="https://gitee.com/qian-cute/images/raw/master/images/snow3.png" id="imgs2" style="display:none" />
    <img src="https://gitee.com/qian-cute/images/raw/master/images/snow4.png" id="imgs3" style="display:none" /> -->
    <!-- <img src="../../assets/images/snow4.png" id="imgs4" style="display:none" /> -->
    <img src="../assets/snow/snow2.png" id="bg" style="display:none" />
    <img src="../assets/snow/菊花 (1).png" id="imgs1" style="display:none" />
    <img src="../assets/snow/菊花 (2).png" id="imgs2" style="display:none" />
    <img src="../assets/snow/桂花.png" id="imgs3" style="display:none" />
    <img src="../assets/snow/菊花.png" id="imgs4" style="display:none" />
    <canvas id='myCanvas' >
    </canvas>
  </div>  
</template>
<script>
let canvas;
let context;
let winW;
let winH;
let last_snow_created_time;
let snows = [];
let back_image;
export default {
    name:'Autumn',
  data() {
    return{
      form:{
       snow:{}
      },
      snow:[]
    }
  },
  mounted() {
        let that=this
    last_snow_created_time = new Date()
    that.initCavas()
    window.onresize =()=>{
         winW = window.innerWidth
       winH = window.innerHeight
      canvas = document.getElementById("myCanvas") //找到cancas元素；
      context = canvas.getContext("2d"); // 创建context对象；getContext() 方法返回一个用于画布上绘图环境；参数 ‘2d’ 指定了画布上绘制的类型，它指定了二维绘图，并且导致这个方法返回一个环境对象，该对象导出一个二维绘图API。了解别的参数查看MDN文档。
    //   context.fillStyle = '#000'  //设置fillStyle属性可以是CSS颜色，渐变，或图案。
      const bg = document.getElementById("bg")
      // context.beginPath();
      context.drawImage(bg,0,0,winW,winH)
      // context.stroke();
      // context.closePath();
      // context.fill();
      // context.restore(); // 这个是动态
      // document.getElementsByClassName("login-container").width = winW
      // document.getElementsByClassName("login-container").height = winH
      canvas.width = winW
      canvas.height = winH
       back_image = document.getElementById("imgs1")
    //   setInterval(() => {
    //     this.drawFrame()
    //   }, 500);
    }
  },
  destroyed() {
    window.onresize = null;
  },
  methods:{
    initCavas() {
      console.log("初始化canvas")
             winW = window.innerWidth
       winH = window.innerHeight
      canvas = document.getElementById("myCanvas") //找到cancas元素；
      context = canvas.getContext("2d"); // 创建context对象；getContext() 方法返回一个用于画布上绘图环境；参数 ‘2d’ 指定了画布上绘制的类型，它指定了二维绘图，并且导致这个方法返回一个环境对象，该对象导出一个二维绘图API。了解别的参数查看MDN文档。
      context.fillStyle = '#000'  //设置fillStyle属性可以是CSS颜色，渐变，或图案。
      const bg = document.getElementById("bg")
      context.beginPath();
      context.drawImage(bg,0,0,winW,winH)
    //   context.stroke();
    //   context.closePath();
    //   context.fill();
    //   context.restore(); // 这个是动态
      document.getElementsByClassName("login-container").width = winW
      document.getElementsByClassName("login-container").height = winH
      canvas.width = winW
      canvas.height = winH
       back_image = document.getElementById("imgs1")
      setInterval(() => {
        this.drawFrame()
      }, 100);
    },
    drawFrame() {
       setInterval(() => {
            var index = parseInt(4* Math.random())+1
          back_image = document.getElementById("imgs" +index)
       },100)
      context.clearRect(0,0, winW, winH);
      this.createSnow(back_image)
      snows.forEach(function(snow,index) {

        snow.y += snow.radius / 0.9;
        if (snow.y > winH) {
          snows.splice(index,1)
        } else {
          snow.draw(snow)
        }
      })
    },
    createSnow(images) {
      let now = new Date()
      if (now - last_snow_created_time > snows.length - now.getMinutes() && snows.length < 1500) {
        const radius = Math.random() * 5 + 2;
        let snow = {x: 0, y: 0, radius: radius, color: "",draw: this.draw,img: images}
        // console.log(snow);
        snow.x =  Math.random() * winW + 1;
        snow.color = '#ffffff';
        snows.push(snow);
        // console.log(snow);
        last_snow_created_time = now;
      }
    },
    draw(snow) {
        // console.log(12);
        // console.log(this.snow);
      context.save();
      context.translate(snow.x, snow.y);
      context.lineWidth = this.lineWidth;
      context.fillStyle = '#fff'
      context.beginPath();
      const bg = document.getElementById("bg")
      context.drawImage(snow.img,0,0,13,13)
    // console.log(this.form.snow);
    //   context.drawImage(bg,0,0,13,13)
      context.stroke();
      context.closePath();
      context.fill();
      context.restore(); // 这个是动态
    },
  }
}
</script>
<style  scoped>


p{
    font-size: 3rem;
    color: #000;
}
.login-container {
    width: 100%;
    height: 100%;
  /* position: absolute; */
  /* background-color: rgb(36, 33, 33); */
 background-color:rgb(253, 255, 243);  
   opacity: 0.5;
   background-size: cover;
  position: absolute;
  overflow: hidden;
  /* z-index:-1; */
  /* max-width: 100%; display: block; */
}
#myCanvas{
      width: 100%;
    height: 100%;
}
img{
    width: 300px;
    height: 300px;
}
</style>