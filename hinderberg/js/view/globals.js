(function(){
	var Globals = function() {
		this.touchEvent = ('createTouch' in document) ? 'touchstart' : 'click';	
		
		function allowFormsInIscroll(){
	  	[].slice.call(document.querySelectorAll('input, select, button')).forEach(function(el){
	    	el.addEventListener(('ontouchstart' in window)?'touchstart':'mousedown', function(e){
	      	e.stopPropagation();
	    	});
	  	});
		}		
		
		allowFormsInIscroll();
	}
	
	window.reminders = window.reminders || {};
	window.reminders.globals = new Globals();
	
}());