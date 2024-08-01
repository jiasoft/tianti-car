const vm = new Vue({
    el: '#app',
    data: function() {
      return { 
          value:"",
          input:"",
          options:[
              {value:1,label:1}
          ],
          checkList:[]
      }
    }
  })