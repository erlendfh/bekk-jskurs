(function(){
	var Globals = function() {
		this.touchEvent = ('createTouch' in document) ? 'touchstart' : 'click';			
	}
	
	window.reminders = window.reminders || {};
	window.reminders.globals = new Globals();
	
}());