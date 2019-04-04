

new Vue({
  el: '#app',
  data: {
    count:0,
    secondCount:0
  },
  computed:{
    double :function(){
      console.log('computed double');
      return this.count * 2
    }
  },
  methods:{
    triple:function(){
      console.log('methods triple');
      return this.count*3
    },
    onePlus:function(){
      console.log('methods onePlus');
      return this.secondCount+1
    }
  }
});



new Vue({
  el:'#input',
  data:{
    name:''
  }
})


new Vue({
  el:'#if',
  data: {
    dog:true
  }
})


new Vue({
  el: '#for',
  data:{
    list:['소갈비','감자','당근','무','깐 밤','소갈비찜 양념']
  }
})


new Vue({
  el:'#list',
  data:{
    travelList:[
      {name:'강릉',distance:'차 3시간'},
      {name:'부산',distance:'차 5시간'},
      {name:'춘천',distance:'차 2시간'},
      {name:'타이베이',distance:'비행기 3시간'},
      {name:'마닐라',distance:'비행기 5시간'},
    ]
  }
})


new Vue({
  el: '#demo',
  data:{
    attachRed:false,
    color:'green'
  },
  computed:{
    divClasses:function(){
      console.log(this.attachRed)
      return {
        red:this.attachRed,
        green:!this.attachRed
      }
    }
  }
})



new Vue({
  el: '#demo1',
  data:{
    attachRed:false,
    color:'green'
  },
  computed:{
    divClasses:function() {
      return {
        red:this.attachRed,
        green:!this.attachRed
      }
    },
    myHeight:function(){
      return this.attachRed ? '50px' : '200px'
    }
  }
})


Vue.component('hello',{
  template:'<h1>{{title}}<button @click="changeTitle">타이틀변경</button></h1>',
  data:function(){
    return {
      title: 'Hello'
    }
  },
  methods:{
    changeTitle:function(){
      this.title = "변경된 타이틀"
    }
  }
})

new Vue({
  el:'#hello'
})
