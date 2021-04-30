"use strict";
window.onload = function () {
    // Create constants
    var section = document.querySelector("section");
    var videos = [
        { name: "crystal" },
        { name: "elf" },
        { name: "frog" },
        { name: "monster" },
        { name: "pig" },
        { name: "rabbit" },
    ];
    // Create an instance of a db object for us to store our database in
    var db;
    function init() {
        var _loop_1 = function (i) {
            // Open transaction, get object store, and get() each video by name
            var objectStore = db
                .transaction("videos")
                .objectStore("videos");
            var request_1 = objectStore.get(videos[i].name);
            request_1.onsuccess = function () {
                // If the result exists in the database (is not undefined)
                if (request_1.result) {
                    // Grab the videos from IDB and display them using displayVideo()
                    console.log("taking videos from IDB");
                    displayVideo(request_1.result.mp4, request_1.result.webm, request_1.result.name);
                }
                else {
                    // Fetch the videos from the network
                    fetchVideoFromNetwork(videos[i]);
                }
            };
        };
        // Loop through the video names one by one
        for (var i = 0; i < videos.length; i++) {
            _loop_1(i);
        }
    }
    // Define the fetchVideoFromNetwork() function
    function fetchVideoFromNetwork(video) {
        console.log("fetching videos from network");
        // Fetch the MP4 and WebM versions of the video using the fetch() function,
        // then expose their response bodies as blobs
        var mp4Blob = fetch("videos/" + video.name + ".mp4").then(function (response) { return response.blob(); });
        var webmBlob = fetch("videos/" + video.name + ".webm").then(function (response) { return response.blob(); });
        // Only run the next code when both promises have fulfilled
        Promise.all([mp4Blob, webmBlob]).then(function (values) {
            // display the video fetched from the network with displayVideo()
            displayVideo(values[0], values[1], video.name);
            // store it in the IDB using storeVideo()
            storeVideo(values[0], values[1], video.name);
        });
    }
    // Define the storeVideo() function
    function storeVideo(mp4Blob, webmBlob, name) {
        // Open transaction, get object store; make it a readwrite so we can write to the IDB
        var objectStore = db
            .transaction(["videos"], "readwrite")
            .objectStore("videos");
        // Create a record to add to the IDB
        var record = {
            mp4: mp4Blob,
            webm: webmBlob,
            name: name,
        };
        // Add the record to the IDB using add()
        var request = objectStore.add(record);
        request.onsuccess = function () {
            console.log("Record addition attempt finished");
        };
        request.onerror = function () {
            console.log(request.error);
        };
    }
    // Define the displayVideo() function
    function displayVideo(mp4Blob, webmBlob, title) {
        // Create object URLs out of the blobs
        var mp4URL = URL.createObjectURL(mp4Blob);
        var webmURL = URL.createObjectURL(webmBlob);
        // Create DOM elements to embed video in the page
        var article = document.createElement("article");
        var h2 = document.createElement("h2");
        h2.textContent = title;
        var video = document.createElement("video");
        video.controls = true;
        var source1 = document.createElement("source");
        source1.src = mp4URL;
        source1.type = "video/mp4";
        var source2 = document.createElement("source");
        source2.src = webmURL;
        source2.type = "video/webm";
        // Embed DOM elements into page
        section.appendChild(article);
        article.appendChild(h2);
        article.appendChild(video);
        video.appendChild(source1);
        video.appendChild(source2);
    }
    // Open our database; it is created if it doesn't already exist
    // (see onupgradeneeded below)
    var request = window.indexedDB.open("videos", 1);
    // onerror handler signifies that the database didn't open successfully
    request.onerror = function () {
        console.log("Database failed to open");
    };
    // onsuccess handler signifies that the database opened successfully
    request.onsuccess = function () {
        console.log("Database opened successfully");
        // Store the opened database object in the db variable. This is used a lot below
        db = request.result;
        init();
    };
    // Setup the database tables if this has not already been done
    request.onupgradeneeded = function (e) {
        // Grab a reference to the opened database
        var db = e.target.result;
        // Create an objectStore to store our notes in (basically like a single table)
        // including a auto-incrementing key
        var objectStore = db.createObjectStore("videos", { keyPath: "name" });
        // Define what data items the objectStore will contain
        objectStore.createIndex("mp4", "mp4", { unique: false });
        objectStore.createIndex("webm", "webm", { unique: false });
        console.log("Database setup complete");
    };
    // Register service worker to control making site work offline
    if ("serviceWorker" in navigator) {
        navigator.serviceWorker
            .register("/learning-area/javascript/apis/client-side-storage/cache-sw/video-store-offline/sw.js")
            .then(function () {
            console.log("Service Worker Registered");
        });
    }
};
