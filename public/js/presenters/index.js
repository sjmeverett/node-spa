
define(['Ractive', 'rv!views/index.html'], function (Ractive, template) {
  'option strict';

  return function (ctx) {
    this.mainView = new Ractive({
      el: '#content',
      template: template,
      data: {
        name: ctx.params.name
      }
    });
  }
});