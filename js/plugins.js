// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// plax setup
// doc https://github.com/cameronmcefee/plax#documentation
$(document).ready(function() {
  initPlax();
});

function initPlax(){
  $('header img.bg').plaxify({"xRange":40,"yRange":40});
  $('header h1.title').plaxify({"xRange":50,"yRange":50, "invert":true});
  $.plax.enable();
}
