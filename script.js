//  create a JavaScript file (script.js) to fetch the JSON data and display it in our HTML:

document.addEventListener("DOMContentLoaded", function () {
    fetch('db.json')
        .then(response => response.json())
        .then(data => {
            const dataDisplay = document.getElementById("dataDisplay");

            // Create HTML elements to display the JSON data
            const nameElement = document.createElement("p");
            nameElement.textContent = "Name: " + data.name;

            const descriptionElement = document.createElement("p");
            descriptionElement.textContent = "Description: " + data.description;

            const donationsElement = document.createElement("p");
            donationsElement.textContent = "Donations: " + data.donations;

            // Append the elements to the "dataDisplay" div
            dataDisplay.appendChild(nameElement);
            dataDisplay.appendChild(descriptionElement);
            dataDisplay.appendChild(donationsElement);
        })
        .catch(error => console.error("Error fetching JSON data:", error));
});

// This JavaScript code uses the fetch API to load the JSON data from data.json. It then creates HTML elements to display the JSON data and appends them to the "dataDisplay" div.
