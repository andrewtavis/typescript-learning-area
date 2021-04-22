// Define custom promise function
function timeoutPromise(message: string, interval: number) {
  return new Promise(
    (resolve: (arg0: string) => void, reject: (arg0: string) => void) => {
      if (message === "" || typeof message !== "string") {
        reject("Message is empty or not a string");
      } else if (interval < 0 || typeof interval !== "number") {
        reject("Interval is negative or not a number");
      } else {
        setTimeout(function () {
          resolve(message);
        }, interval);
      }
    }
  );
}

timeoutPromise("Hello there!", 1000)
  .then((message: any) => {
    alert(message);
  })
  .catch((e: string) => {
    console.log("Error: " + e);
  });
