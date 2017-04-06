(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _progressBar = require('./modules/progress-bar');

var _progressBar2 = _interopRequireDefault(_progressBar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function IIFE() {

  (0, _progressBar2.default)();
})();

},{"./modules/progress-bar":2}],2:[function(require,module,exports){
'use strict';

module.exports = function () {

  var progress = $('.progress-bar-green'),
      counter = $('.dollar-counter'),
      modalBtn = $('.modal-btn');

  var runProgress = function runProgress() {
    var dollar = 0,
        progressInterval = setInterval(function () {
      if (dollar >= 56) {
        clearInterval(progressInterval);
      } else {
        dollar++;
        progress.width(dollar + '%');
        counter.text('$' + dollar * 1);
      }
    }, 10);
  };

  modalBtn.click(function () {
    progress.width('0%');
    counter.text('$0');
    setTimeout(runProgress, 1000);
  });
};

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvanMvZXM2L21haW4uanMiLCJhcHAvanMvZXM2L21vZHVsZXMvcHJvZ3Jlc3MtYmFyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQTs7Ozs7O0FBRUEsQ0FBQyxTQUFTLElBQVQsR0FBZTs7QUFFZDtBQUVELENBSkQ7Ozs7O0FDRkEsT0FBTyxPQUFQLEdBQWlCLFlBQVU7O0FBRXpCLE1BQU0sV0FBVyxFQUFFLHFCQUFGLENBQWpCO0FBQUEsTUFDTSxVQUFVLEVBQUUsaUJBQUYsQ0FEaEI7QUFBQSxNQUVNLFdBQVcsRUFBRSxZQUFGLENBRmpCOztBQUlBLE1BQU0sY0FBYyxTQUFkLFdBQWMsR0FBTTtBQUN4QixRQUFJLFNBQVMsQ0FBYjtBQUFBLFFBQ0ksbUJBQW1CLFlBQVksWUFBTTtBQUNuQyxVQUFJLFVBQVUsRUFBZCxFQUFrQjtBQUNoQixzQkFBYyxnQkFBZDtBQUNELE9BRkQsTUFFTztBQUNMO0FBQ0EsaUJBQVMsS0FBVCxDQUFrQixNQUFsQjtBQUNBLGdCQUFRLElBQVIsT0FBaUIsU0FBUyxDQUExQjtBQUNEO0FBQ0YsS0FSa0IsRUFRaEIsRUFSZ0IsQ0FEdkI7QUFVRCxHQVhEOztBQWFBLFdBQVMsS0FBVCxDQUFlLFlBQU07QUFDbkIsYUFBUyxLQUFULENBQWUsSUFBZjtBQUNBLFlBQVEsSUFBUixDQUFhLElBQWI7QUFDQSxlQUFXLFdBQVgsRUFBd0IsSUFBeEI7QUFDRCxHQUpEO0FBTUQsQ0F6QkQiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiaW1wb3J0IHByb2dyZXNzQmFyIGZyb20gJy4vbW9kdWxlcy9wcm9ncmVzcy1iYXInO1xuXG4oZnVuY3Rpb24gSUlGRSgpe1xuXG4gIHByb2dyZXNzQmFyKCk7XG5cbn0pKCk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCl7XG5cbiAgY29uc3QgcHJvZ3Jlc3MgPSAkKCcucHJvZ3Jlc3MtYmFyLWdyZWVuJyksXG4gICAgICAgIGNvdW50ZXIgPSAkKCcuZG9sbGFyLWNvdW50ZXInKSxcbiAgICAgICAgbW9kYWxCdG4gPSAkKCcubW9kYWwtYnRuJyk7XG5cbiAgY29uc3QgcnVuUHJvZ3Jlc3MgPSAoKSA9PiB7XG4gICAgbGV0IGRvbGxhciA9IDAsXG4gICAgICAgIHByb2dyZXNzSW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgaWYgKGRvbGxhciA+PSA1Nikge1xuICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChwcm9ncmVzc0ludGVydmFsKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZG9sbGFyKys7XG4gICAgICAgICAgICBwcm9ncmVzcy53aWR0aChgJHtkb2xsYXJ9JWApO1xuICAgICAgICAgICAgY291bnRlci50ZXh0KGAkJHtkb2xsYXIgKiAxfWApO1xuICAgICAgICAgIH1cbiAgICAgICAgfSwgMTApO1xuICB9XG5cbiAgbW9kYWxCdG4uY2xpY2soKCkgPT4ge1xuICAgIHByb2dyZXNzLndpZHRoKCcwJScpO1xuICAgIGNvdW50ZXIudGV4dCgnJDAnKTtcbiAgICBzZXRUaW1lb3V0KHJ1blByb2dyZXNzLCAxMDAwKTtcbiAgfSk7XG5cbn1cbiJdfQ==
