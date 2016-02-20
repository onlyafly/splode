function splode(sourceId, destinationId) {
  var sourceElement = document.getElementById(sourceId);
  var destinationElement = document.getElementById(destinationId);
  var data = sourceElement.children;
  var i = Math.floor((Math.random() * data.length)); // generate a random number from 0 to length-1
  destinationElement.innerHTML = data[i].innerHTML;
}
