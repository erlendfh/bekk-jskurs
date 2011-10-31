(function() {
  function Tasks(params) {
    var defaultParams = {
      taskListElement: undefined,
      persistence: undefined,
      inputField: undefined
    }

    params = $.extend(defaultParams, params);

    this.persistence = params.persistence;
    this.inputField = $(params.inputField);
    this.taskListElement = $(params.taskListElement);

    this.render();
    this.initializeBindings();
  }

  $.extend(Tasks.prototype, {

    initializeBindings: function () {
     
    },
    
    addTask: function(task) {
    
    },

    removeTask: function(taskId) {
      
    },

    render: function() {
     
    },

    taskHTML: function(task) {
    
    }
  });

  window.reminders = window.reminders || {};
  window.reminders.Tasks = Tasks;

})();