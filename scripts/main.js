var app;!function(t){"use strict";var e=function(){function t(t,e,n){var r=this;this.$mdMedia=e,t.scrollTo=function(t){var e=document.getElementById(t),r={duration:1e3,easing:"easeOutQuart",offset:20};n(e,r)},t.gtXs=function(){return r.$mdMedia("gt-xs")},t.gtMd=function(){return r.$mdMedia("gt-md")},t.isNotIE=function(){return-1==r.detectIE()}}return t.prototype.detectIE=function(){var t=window.navigator.userAgent,e=t.indexOf("MSIE ");if(e>0)return parseInt(t.substring(e+5,t.indexOf(".",e)),10);var n=t.indexOf("Trident/");if(n>0){var r=t.indexOf("rv:");return parseInt(t.substring(r+3,t.indexOf(".",r)),10)}var a=t.indexOf("Edge/");return a>0?parseInt(t.substring(a+5,t.indexOf(".",a)),10):-1},t.$inject=["$scope","$mdMedia","smoothScroll"],t}();t.HomeCtrl=e}(app||(app={}));var app;!function(t){"use strict";angular.module("anaBoca",["ngMaterial","angular-parallax","smoothScroll"]).config(["$mdThemingProvider",function(t){t.theme("default").primaryPalette("amber")}]).controller("HomeCtrl",t.HomeCtrl)}(app||(app={}));