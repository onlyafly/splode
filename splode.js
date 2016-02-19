function main() {
  var sourceElement = document.getElementById('splodeData');
  var data = jsyaml.load(sourceElement.innerText);
  var contentElement = document.getElementById('splodeContent');
  var n = data.length;
  var i = Math.floor((Math.random() * n)); // generate a random number from 0 to length-1
  contentElement.innerText = data[i];
}

main();
