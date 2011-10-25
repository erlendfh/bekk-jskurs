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

    this.taskListElement.append(this.renderTasksHTML());

    this.initializeBindings();
  }

  $.extend(Tasks.prototype, {
    addTask: function(task) {
      this.persistence.create(task.values);
      this.taskListElement.append(this.renderTaskHTML(task));
    },

    removeTask: function(taskId) {
      this.persistence.destroy(taskId);
    },

    renderTasksHTML: function() {
      var html = "";
      var that = this;
      this.persistence.findAll().forEach(function(task) {
        
        html += that.renderTaskHTML(task);
      });

      return html;
    },

    renderTaskHTML: function(task) {
      var checked = task.done ? 'checked' : "";
      return '<li value=' + task.id + '><input type="checkbox" name="done" ' + checked +  ' value="1" />' + task.text + '</li>';
    },

    initializeBindings: function () {
      var that = this;
      this.inputField.bind('blur', function(event) {
        that.addTask(new Task({
          text: event.srcElement.value,
          done: false,
          date: {}
        }));

        event.srcElement.value = '';
      });

      this.taskListElement.delegate('input', reminders.globals.touchEvent, function() {
        var checkbox = $(this);
        var checked = checkbox.is(':checked');
        var task = that.persistence.find(checkbox.parent().attr('value'));
        task.done = checked;
        that.persistence.update(task);
      });
    }
  });

  window.reminders = window.reminders || {};
  window.reminders.Tasks = Tasks;

})();