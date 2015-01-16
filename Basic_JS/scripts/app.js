define(function (require) {
	var button = document.createElement("button");
	
	button.onclick = function(){
		
		var alerter = require(["alerter"], function (alerter) {
			alerter.alerter("hello via on demand load");
		});

	};
			
	button.textContent = "Click me to load alerter";
	document.body.appendChild(button);

});

// require(["alerter"], function (alerter) {
// 	alerter.alerter("hello from app");
// 	alerter.console("hello from app");
// });