(function(){

function Tasks(taskListElement, params, persistence) {
	var defaultParams = {
		inputField : undefined
	}
	
	params = $.extend(defaultParams, params);
		
	this.persistence = persistence;
	this.inputField = $(params.inputField);
	
	if(taskListElement === undefined) {
		console.log("A list element must by spesified");
		return;
	}	
	
	taskListElement = typeof taskListElement == 'object' ? taskListElement : document.getElementById(taskListElement);
	this.taskListElement = $(taskListElement);
	
	this.taskListElement.append(this.renderTasksHTML());	
	
	var that = this;
	this.inputField.bind('blur', function(event) {
		that.addTask({
			text: event.srcElement.value,
			done: false
		});
	});
}

$.extend(Tasks.prototype, {
  addTask: function(task) {
    this.persistence.create(task);
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
		return '<li value=' + task.id +'>' + task.text + '</li>';
	}
	
});

window.reminders = window.reminders || {};
window.reminders.Tasks = Tasks;

})();