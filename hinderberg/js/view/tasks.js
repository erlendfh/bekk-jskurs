(function(){

function Tasks(taskListElement, params, persistence) {
	var defaultParams = {
		option : undefined
	}
	
	this.persistence = persistence;
	
	params = $.extend(defaultParams, params);
	
	if(taskListElement === undefined) {
		console.log("A list element must by spesified");
		return;
	}	
	
	taskListElement = typeof taskListElement == 'object' ? taskListElement : document.getElementById(taskListElement);
	this.taskListElement = $(taskListElement);
	
	this.taskListElement.append(this.renderTasksHTML());	
}

$.extend(Tasks.prototype, {
  addTask: function(task) {
    this.persistence.create(task);
		this.taskListElement.append(renderTaskHTML(task));	
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
		return '<li value=' + task.id +'>' + task.text + '</li>';
	}
	
});

window.reminders = window.reminders || {};
window.reminders.Tasks = Tasks;

})();