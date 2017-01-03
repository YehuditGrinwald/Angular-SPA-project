"use strict";

var showDateTime = React.createClass({

    render: function () {
        var date = new Date();
       date = new Date().toLocaleDateString();
       var d = React.createElement("h3", null, date);
       return d;
    },

});

var divContent = document.getElementById("dateTimeByReact");
//////////////////create//////////////who?///////////where?
ReactDOM.render(React.createElement(showDateTime), divContent);

