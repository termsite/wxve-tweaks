// Play background music when the page loads
document.addEventListener('DOMContentLoaded', function() {
    var music = document.getElementById('background-music');
    music.play();

    // If music is paused, show an alert
    music.addEventListener('pause', function() {
        alert('Music is paused. Keep the vibes going!');
    });
});

// Toggle dropdown menu on button click
function toggleDropdown() {
    var dropdown = document.getElementById('dropdown');
    if (dropdown.style.display === "none" || dropdown.style.display === "") {
        dropdown.style.display = "block";
        dropdown.style.animation = "slideDown 0.5s ease forwards";
    } else {
        dropdown.style.display = "none";
    }
}
