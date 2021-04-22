"use strict";
var promise = fetch("images/coffee.jpg");
var promise2 = promise.then(function (response) {
    if (!response.ok) {
        throw new Error("HTTP error! status: " + response.status);
    }
    else {
        return response.blob();
    }
});
var promise3 = promise2.then(function (myBlob) {
    var objectURL = URL.createObjectURL(myBlob);
    var image = document.createElement("img");
    image.src = objectURL;
    document.body.appendChild(image);
});
var errorCase = promise3.catch(function (e) {
    console.log("There has been a problem with your fetch operation: " + e.message);
});
/*
async function myFetch() {
  let response = await fetch('coffee.jpg');

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  let myBlob = await response.blob();

  let objectURL = URL.createObjectURL(myBlob);
  let image = document.createElement('img');
  image.src = objectURL;
  document.body.appendChild(image);
  }
}

myFetch()
.catch(e => {
  console.log('There has been a problem with your fetch operation: ' + e.message);
});
*/
