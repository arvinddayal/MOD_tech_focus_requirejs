require.config({
  paths: {
    "jquery": "https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min"
  }
});

// require(['jquery'], function($) {
// 	console.log($);
// });

require(['content/modules/template'], function(template) {
  template.showName("MOD");
});