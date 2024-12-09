// script.js

// Initialize map controls
document.addEventListener("DOMContentLoaded", function () {
    // Custom popup example: Display a welcome message
    let popup = L.popup()
        .setLatLng([0, 0]) // Adjust to your map's default view
        .setContent("Welcome to the Web Map!")
        .openOn(map);

    // Example of adding an event listener to a map layer
    map.on("click", function (e) {
        alert("You clicked the map at " + e.latlng.toString());
    });

    // Additional interactive features
    // Toggle visibility of map layers
    document.querySelector("#toggle-layer").addEventListener("click", function () {
        if (map.hasLayer(yourLayer)) {
            map.removeLayer(yourLayer);
        } else {
            map.addLayer(yourLayer);
        }
    });
});
