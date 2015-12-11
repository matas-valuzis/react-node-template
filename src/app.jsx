require('./sass/app.scss');
var React = require('react');
var ReactDOM = require('react-dom');
var MainFrame = require('./components/MainFrame.jsx');
 
ReactDOM.render(
    <MainFrame />,
    document.getElementById('app')
);
