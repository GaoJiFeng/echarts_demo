<template>
  <div class="home"></div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "hello",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  },
  mounted() {
    this.drawLine();
  },
  methods: {
    drawLine() {
     
      let myChart = this.$echarts.init(
        document.getElementsByClassName("home")[0]
      );
      
      myChart.setOption({
        legend: {
          orient: "vertical",
          right: 10,
          top: 200,
          data: ["考点专练", "套卷练习", "仿真模拟"]
        },
        graphic: {
          
          type: "text",
          left: "center",
          top: "center",
          backgroundColor:'black',
          style: {
            text: "0\n做题数",
            textAlign: "center",
            fill: "black",
            fontSize: 20,
            
          }
        },

        color: ["rgb(245,178,108)", "rgb(87,187,171)", "rgb(163, 233, 165)"],
        series: [
          {
            name: "访问来源",
            type: "pie",
            radius: [60, 120],
            avoidLabelOverlap: false,
            label: {
              show: false,
              position: "center"
            },
            emphasis: {
              label: {
                show: true,
                fontSize: "20",
                fontWeight: "bold"
              }
            },
            labelLine: {
              show: false
            },
            data: [
              { value: 30, name: "考点专练" },
              { value: 30, name: "套卷练习" },
              { value: 30, name: "仿真模拟" }
            ]
          }
        ]
      });
    }
  }
};
</script>
<style  scoped>
.home {
  width: 600px;
  height: 500px;
  background: rgb(224, 219, 219);
}
</style>
