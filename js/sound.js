
onmessage = function(e) {
  importScripts('timbre.js');   
  var command = e.data;
  
  if (command == 'play') {
  	console.log('playing');
  	T("sin", {freq:880, mul:0.5}).play();
  }

}