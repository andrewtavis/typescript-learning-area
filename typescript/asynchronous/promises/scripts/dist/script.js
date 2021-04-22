"use strict";
// Define custom promise function
function timeoutPromise(message, interval) {
    return new Promise(function (resolve, reject) {
        if (message === "" || typeof message !== "string") {
            reject("Message is empty or not a string");
        }
        else if (interval < 0 || typeof interval !== "number") {
            reject("Interval is negative or not a number");
        }
        else {
            setTimeout(function () {
                resolve(message);
            }, interval);
        }
    });
}
timeoutPromise("Hello there!", 1000)
    .then(function (message) {
    alert(message);
})
    .catch(function (e) {
    console.log("Error: " + e);
});
