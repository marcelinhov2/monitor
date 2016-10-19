;(function() {
  'use strict';

  var Monitor = function(win) {
    win = win || window;

    console.log(moment);

    var doc = win.document;
    var timing = win.performance.timing;

    function toSec(ms){
      return ms / 1000;
    }

    function getStartRenderTime(){
      return toSec(timing.domContentLoadedEventStart - timing.navigationStart);
    }

    function getServerTime(){

    }

    function getContentRequests(){
      var requests = win.performance.getEntriesByType("resource");
      console.log(requests);

      return requests;
    }

    return {
      getStartRenderTime: getStartRenderTime,
      getContentRequests: getContentRequests
    };

  };

  window.Monitor = new Monitor;
})();