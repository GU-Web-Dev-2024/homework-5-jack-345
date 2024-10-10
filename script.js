/*
    Name: Jack Ou
    Class: CPSC332
    Assignment: HW4
    Last Modified: 10/9/2024
*/

"use strict";

// List of additional artworks to add dynamically
const newArtworks = [
    { title: 'The Scream', artist: 'Edvard Munch', img: 'https://via.placeholder.com/200' },
    { title: 'Girl with a Pearl Earring', artist: 'Johannes Vermeer', img: 'https://via.placeholder.com/200' },
    { title: 'The Birth of Venus', artist: 'Sandro Botticelli', img: 'https://via.placeholder.com/200' },
    { title: 'The Night Watch', artist: 'Rembrandt van Rijn', img: 'https://via.placeholder.com/200' },
    { title: 'The Kiss', artist: 'Gustav Klimt', img: 'https://via.placeholder.com/200' },
    { title: 'American Gothic', artist: 'Grant Wood', img: 'https://via.placeholder.com/200' },
    { title: 'Las Meninas', artist: 'Diego Velázquez', img: 'https://via.placeholder.com/200' },
    { title: 'The Last Supper', artist: 'Leonardo da Vinci', img: 'https://via.placeholder.com/200' },
    { title: 'Water Lilies', artist: 'Claude Monet', img: 'https://via.placeholder.com/200' },
    { title: 'Starry Night Over the Rhône', artist: 'Vincent van Gogh', img: 'https://via.placeholder.com/200' }
];

//initializing variables
let viewedCount = 0;
let displayCount = document.getElementById("counter");
let artGrid = document.getElementsByClassName("art-grid")[0];
let artDiv = document.getElementsByClassName("art-panel");

for (let i = 0; i < artDiv.length; i++) {
    artDiv[i].addEventListener("click", function(e) {
        if (e.target.style.backgroundColor === "red") {
            e.target.style.backgroundColor = "";  // Reset to default background
        } 
        else {
        e.target.style.backgroundColor = "red";
        }
    });
};

//adding button
document.getElementById('add-art-button').addEventListener("click", function() {
    if (newArtworks.length > 0) {
        // Pop an artwork from the array
        let newArtwork = newArtworks.shift();

        // Create new art panel
        let artDiv = document.createElement('div');
        artDiv.classList.add('art-panel');

        // Create image and description
        let img = document.createElement('img');
        img.src = newArtwork.img;
        img.alt = newArtwork.title;

        let description = document.createElement('p');
        description.textContent = `${newArtwork.title} by ${newArtwork.artist}`;

        // Append image and description to the new art panel
        artDiv.appendChild(img);
        artDiv.appendChild(description);

        // Append new art panel to the art grid
        artGrid.appendChild(artDiv);

        // Increment viewed artworks counter
        viewedCount++;
        displayCount.textContent = `Artworks Viewed: ${viewedCount}`;
    } 
    else {
        alert("No more artworks to add!");
    }
});

//reset button
document.getElementById("reset-button").addEventListener("click", function() {
    while (artGrid.children.length > 3) {
        artGrid.removeChild(artGrid.lastChild);
    }
    viewedCount = 0;
    displayCount.textContent = `Artworks Viewed: ${viewedCount}`;
});