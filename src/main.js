var React = require('react');
var NotePadApp = require( './components/NotePadApp.js');
var DummyComponent = require( './components/DummyComponent.js');

React.render(
	<NotePadApp url='library.json' pollInterval={2000} />, document.body
);


