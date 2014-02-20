#Node.js single page application template

I created this to serve as the base for single page applications I write.  It uses [node.js](http://nodejs.org/)
and the [express](http://expressjs.com/) framework at its core.  Only one route is defined here, namely `/app/*`,
which serves up the single page application.  Other routes should be added to get data from the database and
serve it to the app.

The front end uses [RequireJS](http://requirejs.org/) for dependencies, [Page.js](http://visionmedia.github.io/page.js/)
for routing and the excellent [Ractive.js](http://www.ractivejs.org/) for data binding.  The
[RequireJS Ractive plugin](https://github.com/RactiveJS/requirejs-ractive) is used so that views can be referenced as
RequireJS dependencies.

The front end is structured in a MVP fashion (although there are no models defined), and there is a folder for each in
the [js](public/js) folder.  The [app.js](public/js/presenters/app.js) file contains the client-side route
definitions.  The [views](public/js/views) folder contains the mustache templates used by Ractive.

Business logic should go in modules in the [models](public/js/models) folder, whilst presenters should be used to bind
this data onto the views and wire up events.