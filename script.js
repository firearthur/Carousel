var createRecElement = function (color) {
  var rec = document.createElement('li');
  rec.style = 'background: ' + color + ';';

  return rec; 
};


var moveUp = function (list, rectangles, state) {
  // remove the bottom one
  var lastChild = list.children[list.children.length - 1];
  lastChild.remove();

  // create the new rectangle
  var newRecColor = rectangles[(state.i - 2 + rectangles.length * 2) % rectangles.length];
  var newRec = createRecElement(newRecColor);
  newRec.classList.add('collapsed');

  prepend(list, newRec);

  setTimeout(function(){
    newRec.classList.remove('collapsed');

  }, 100);
  state.i = (state.i - 1 + rectangles.length * 2) % rectangles.length;
};



var moveDown = function (list, rectangles, state) {
  
  var firstChild = list.children[0];
  firstChild.classList.add('collapsed');

  // create the new rectangle
  var newRecColor = rectangles[(state.i + 2 + rectangles.length * 2) % rectangles.length];
  var newRec = createRecElement(newRecColor);

  list.appendChild(newRec);

  setTimeout(function(){
    
    firstChild.remove();

  }, 1000);

  state.i = (state.i + 1 + rectangles.length * 2) % rectangles.length;
};

var prepend = function (parentElement, elementToPrepend) {
  if(parentElement.children.length) {
    var firstChild = parentElement.children[0];
    parentElement.insertBefore(elementToPrepend, firstChild);
  } else {
    parentElement.append(elementToPrepend);
  }
};


var init = function(){
  var state = {i: 1};

  var rectangles = ['yellow', 'red', 'blue', 'purple', 'teal'];
  var list = document.getElementById('list');


  
  var upButton = document.getElementById('up').addEventListener('click', function(){
      moveUp(list, rectangles, state); 
  });

  var downButton = document.getElementById('down').addEventListener('click', function(){
    moveDown(list, rectangles, state);
  });


  for(var i = 0; i < 3; i++){
    var element = createRecElement(rectangles[i]);
    list.appendChild(element);
  }

};

init();
