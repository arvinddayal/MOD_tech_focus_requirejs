define(['jquery'], function() {
	var showName = function (n) {
		var template = "<h1>" + n + "</h1>";
		$('body').html(template);
	};

	return {
		showName: showName
	};
});
