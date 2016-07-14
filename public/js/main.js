Vue.component('tasks',{

  template: '#task-template',

  data: function() {
    return {

      list: []

    };

  },

  created: function(){

    this.fetchTaskList();

  },

  methods: {
    delete: function(task){
      this.list.$remove(task);
    },

    fetchTaskList: function(){
      $.getJSON('api/tasks', function(tasks){

        this.list = tasks;

      }.bind(this));
    }
  }

});

new Vue({

  el: 'body',


});
