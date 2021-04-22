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
