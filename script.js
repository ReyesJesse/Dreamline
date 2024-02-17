$(document).ready(function() {
    $('.menu-toggle').click(function() {
        $('.navList').toggleClass('active');
        $(this).toggleClass('active'); // Toggle 'active' class on hamburger icon
        $('.logo').toggleClass('hidden'); // Toggle 'hidden' class on logo
    });
});

// Assuming you have an array of image elements
const images = document.querySelectorAll('.imageSet img');

$(document).ready(function() {
    $('.imageSet img').on('load', function() {
        $(this).addClass('loaded');
    });
});