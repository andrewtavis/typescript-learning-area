function fetchAndDecode(url: any, type: any) {
  return fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      } else {
        if (type === "blob") {
          return response.blob();
        } else if (type === "text") {
          return response.text();
        }
      }
    })
    .catch((e) => {
      console.log(
        `There has been a problem with your fetch operation for resource "${url}": ` +
          e.message
      );
    });
}

/*
function fetchAndDecode(url, type) {
  return fetch(url).then(response => {
    if(!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    } else {
      if(type === 'blob') {
        return response.blob();
      } else if(type === 'text') {
        return response.text();
      }
    }
  })
  .catch(e => {
    console.log(`There has been a problem with your fetch operation for resource "${url}": ` + e.message);
  })
  .finally(() => {
    console.log(`fetch attempt for "${url}" finished.`);
  });
}
*/

let coffee = fetchAndDecode("images/coffee.jpg", "blob");
let tea = fetchAndDecode("images/tea.jpg", "blob");
let description = fetchAndDecode("description.txt", "text");

Promise.all([coffee, tea, description]).then((values: any) => {
  console.log(values);
  // Store each value returned from the promises in separate variables; create object URLs from the blobs
  let objectURL1 = URL.createObjectURL(values[0]);
  let objectURL2 = URL.createObjectURL(values[1]);
  let descText = values[2];

  // Display the images in <img> elements
  let image1 = document.createElement("img");
  let image2 = document.createElement("img");
  image1.src = objectURL1;
  image2.src = objectURL2;
  document.body.appendChild(image1);
  document.body.appendChild(image2);

  // Display the text in a paragraph
  let para = document.createElement("p");
  para.textContent = descText;
  document.body.appendChild(para);
});
