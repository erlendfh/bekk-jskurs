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
      var that = this;
      this.inputField.bind('blur', function(event) {
        that.addTask({
          text: event.srcElement.value,
          done: false,
          date: {}
        });

        event.srcElement.value = '';
      });

      this.taskListElement.delegate('input', 'change', function() {
        var checkbox = $(this);
        var checked = checkbox.is(':checked');
        var task = that.persistence.find(checkbox.parent().attr('value'));
        task.done = checked;
        that.persistence.update(task);
      });

      this.taskListElement.delegate('li', 'swipeRight', function() {
        var listElement = $(this);

        listElement.anim({
          translate3d: listElement.width() + 'px, 0px, 0px'
          }, 0.5, 'ease-in-out 1ms', function() {
            that.persistence.destroy(listElement.attr('value'));
            that.render(); 
          });
      });
    },
    
    addTask: function(task) {
      var tl = this.taskListElement;
      this.persistence.create(task);
      var el = $(this.taskHTML(task));
      tl.prepend(el);
      var offset = el.height();
      tl.css("top", (-offset) + "px");
      tl.anim({translate3d: '0px, ' + offset  + 'px, 0px'}, 0.5, 'ease-in-out 1ms', function () {
        tl.attr('style', '');
      });
    },

    removeTask: function(taskId) {
      this.persistence.destroy(taskId);
    },

    render: function() {
      var html = "";
      var that = this;
      this.persistence.findAll().forEach(function(task) {
        html += that.taskHTML(task);
      });

      this.taskListElement.html(html);
    },

    taskHTML: function(task) {
      var checked = task.done ? 'checked' : "";
      return '<li value=' + task.id + '><input type="checkbox" name="done" ' + checked +  ' value="1" />' + task.text + '</li>';
    }
  });

  window.reminders = window.reminders || {};
  window.reminders.Tasks = Tasks;

})();