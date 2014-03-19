require.config({
  baseUrl: '/js'
});

require(['require', 'jquery', 'page', 'presenters/index'], function (require, $, page) {
  page.base('/app');

  //make the navbar links look right
  page('*', fixNavActive);

  //define the routes
  var index = require('presenters/index');
  page('/', index);
  page('/hello/:name', index);

  //handle 404s
  page('*', function(ctx) {
    $('#content').html('<h1 class="container">404 - Page not found.</h1>');
  });

  page();




  function fixNavActive(ctx, next) {
    var link = null;
    var links = $('#topnav a').toArray();

    for (var i = 0; i < links.length; i++) {
      var $this = $(links[i]);

      if (ctx.canonicalPath.indexOf($this.attr('href')) == 0)
        link = $this;

      $this.parent().removeClass('active');
    }

    link.parent().addClass('active');
    next();
  }
});
