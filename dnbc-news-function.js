
function searchFunction() {
    alert("Search functionality is under development!");
  } 
  
 //---active link---
  function setActiveLink(event) {
    // Remove active class from all nav-links
    const links = document.querySelectorAll('.nav-link');
    links.forEach(link => link.classList.remove('active'));

    // Add active class to the clicked nav-link
    event.target.classList.add('active');
}


//--news map api--
function initMap() { 
    var mapOptions = { 
        center: { lat: 51.5074, lng: -0.1278 },
         zoom: 10, //zoom level
        };
         var map = new google.maps.Map(document.getElementById('map'), mapOptions); }
/* ---theme toggle---*/
document.getElementById('theme-toggle').addEventListener('click', function() {
var body = document.body;
var button = document.getElementById('theme-toggle');
var navbar = document.getElementById('navbar');

body.classList.toggle('dark-theme');
navbar.classList.toggle('navbar-dark');
navbar.classList.toggle('bg-dark');

if (body.classList.contains('dark-theme')) {
    button.textContent = 'Dark';
    button.classList.remove('btn-outline-primary');
    button.classList.add('btn-outline-light');
} else {
    button.textContent = 'Light';
    button.classList.remove('btn-outline-light');
    button.classList.add('btn-outline-primary');
}
});

function updateAds(content) {
    const adsElement = document.querySelector('.ads p');
    adsElement.textContent = content;
}

// Example of dynamically updating the ad content
setTimeout(() => updateAds("Breaking News: New updates available! Stay tuned."), 5000);
setTimeout(() => updateAds("Exclusive: Insights into global events!"), 10000);function searchFunction() {
    alert("Search functionality is under development!");
  }