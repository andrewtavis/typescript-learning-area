"use strict";
function fetchAndDecode(url, type) {
  return fetch(url)
    .then(function (response) {
      if (!response.ok) {
        throw new Error("HTTP error! status: " + response.status);
      } else {
        if (type === "blob") {
          return response.blob();
        } else if (type === "text") {
          return response.text();
        }
      }
    })
    .catch(function (e) {
      console.log(
        'There has been a problem with your fetch operation for resource "' +
          url +
          '": ' +
          e.message
      );
    });
}
var coffee = fetchAndDecode("images/coffee.jpg", "blob");
var tea = fetchAndDecode("images/tea.jpg", "blob");
var description = fetchAndDecode("description.txt", "text");
Promise.all([coffee, tea, description]).then(function (values) {
  console.log(values);
  // Store each value returned from the promises in separate variables; create object URLs from the blobs
  var objectURL1 = URL.createObjectURL(values[0]);
  var objectURL2 = URL.createObjectURL(values[1]);
  var descText = values[2];
  // Display the images in <img> elements
  var image1 = document.createElement("img");
  var image2 = document.createElement("img");
  image1.src = objectURL1;
  image2.src = objectURL2;
  document.body.appendChild(image1);
  document.body.appendChild(image2);
  // Display the text in a paragraph
  var para = document.createElement("p");
  para.textContent = descText;
  document.body.appendChild(para);
});
