!function(e){var t={};function n(i){if(t[i])return t[i].exports;var o=t[i]={i:i,l:!1,exports:{}};return e[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(i,o,function(t){return e[t]}.bind(null,o));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=2)}([,,function(e,t,n){e.exports=n(3)},function(e,t){var n=function(){function e(){this.loadSelect=document.getElementById("id_tag_loading"),this.locationSelect=document.getElementById("id_tag_location"),this.initialize=this.initialize.bind(this),this.handleLoadChange=this.handleLoadChange.bind(this),this.loadSelect.addEventListener("change",this.handleLoadChange),this.initialize()}return e.prototype.initialize=function(){this.handleLoadChange()},e.prototype.handleLoadChange=function(){"instant_load"!==this.loadSelect.options[this.loadSelect.selectedIndex].value?(this.locationSelect.disabled=!0,[].forEach.call(this.locationSelect,function(e){"0_top_head"===e.value&&(e.selected=!0)}),this.hiddenInput=document.createElement("input"),this.hiddenInput.id=this.locationSelect.id,this.hiddenInput.name=this.locationSelect.name,this.hiddenInput.type="hidden",this.hiddenInput.value="0_top_head",this.locationSelect.parentNode.insertBefore(this.hiddenInput,this.locationSelect.parentNode.childNodes[0])):(this.locationSelect.disabled=!1,this.hiddenInput&&this.hiddenInput.remove())},e}();document.addEventListener("DOMContentLoaded",function(){new n})}]);