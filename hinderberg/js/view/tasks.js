(function(){

var Tasks = function(taskListElement, params) {
	var defaultParams = {
		option : undefined
	}
	
	params = $.extend(defaultParams, params);
	
	if(taskListElement === undefined) {
		console.log("A list element must by spesified");
		return;
	}	
	
	taskListElement = typeof taskListElement == 'object' ? taskListElement : document.getElementById(taskListElement);
	taskListElement = $(taskListElement);
	
	var that = this;
	
	var tasksArray = [
		{text : "Start", done : false},
		{text : "...", done : false},
		{text : "...", done : false},
		{text : "...", done : false},
		{text : "...", done : false},
		{text : "...", done : false},
		{text : "...", done : false},
		{text : "...", done : false},
		{text : "...", done : false},
		{text : "...", done : false},
		{text : "...", done : false},
		{text : "...", done : false},
		{text : "...", done : false},
		{text : "...", done : false},
		{text : "...", done : false},
		{text : "...", done : false},
		{text : "...", done : false},
		{text : "...", done : false},
		{text : "...", done : false},
		{text : "...", done : false},
		{text : "...", done : false},
		{text : "...", done : false},
		{text : "...", done : false},
		{text : "...", done : false},
		{text : "...", done : false},
		{text : "...", done : false},
		{text : "...", done : false},
		{text : "...", done : false},
		{text : "...", done : false},
		{text : "...", done : false},
		{text : "End", done : false}
	];
	
	var init = function() {
		taskListElement.append(renderTasksHTML(tasksArray));
	}
	
	that.addTask = function(task) {
		tasksArray.push(task);
		taskListElement.append(renderTaskHTML(task, tasksArray.length + 1));	
	};
	
	that.removeTask = function(taskIndex) {
		tasksArray.splice(taskIndex, 1);
	};
	
	var renderTasksHTML = function(tasks) {
		var html = "";
		
		tasks.forEach(function(task, idx){
			html += renderTaskHTML(task, idx);
		});	
			
		return html;			
	};
	
	var renderTaskHTML = function(task, idx) {
		return '<li value=' + idx +'>' + task.text + '</li>';
	};
	
	init();
}

window.reminders = window.reminders || {};
window.reminders.Tasks = Tasks;

})();