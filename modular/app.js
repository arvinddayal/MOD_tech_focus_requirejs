require.config({
	paths: {
		"jquery": "https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min"
	}
});

////jQuery registers itself as the global variables "$" and "jQuery", even when it detects AMD/RequireJS.
require(['jquery'], function($) {
	console.log($);
});

require(['content/modules/template'], function(template) {
	template.showName("Go Buckeyes!!!");
});