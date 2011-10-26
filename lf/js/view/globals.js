(function(){
	window.reminders = window.reminders || {};
	window.reminders.globals = {
		touchEvent: ('createTouch' in document) ? 'touchstart' : 'click'
	}
}());