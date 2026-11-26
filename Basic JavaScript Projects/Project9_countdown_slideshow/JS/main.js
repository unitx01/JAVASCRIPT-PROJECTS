// ===================== COUNTDOWN TIMER =====================

// Starts a countdown from the number of seconds the user typed in
function countdown() {
    // Read the starting number from the input box with id "seconds"
    var seconds = document.getElementById("seconds").value;

    // Nested function: runs once per second to update the timer
    function tick() {
        // Subtract one second
        seconds = seconds - 1;

        // Show the remaining seconds in the element with id "timer"
        timer.innerHTML = seconds;

        // Schedule tick to run again in 1 second
        var time = setTimeout(tick, 1000);

        // When the countdown passes zero, stop the timer
        if (seconds == -1) {
            alert("Time's up!");
            clearTimeout(time);       // Cancel the next scheduled tick
            timer.innerHTML = "";     // Clear the timer display
        }
    }

    // Start the first tick right away
    tick();
}


// ===================== SLIDESHOW =====================

// Keeps track of which slide is showing (starts at slide 1)
let slideIndex = 1;

// Show the first slide when the page loads
showSlides(slideIndex);

// Next/previous arrows: n is 1 for next, -1 for previous
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Dot/thumbnail controls: jump straight to slide number n
function currentSlide(n) {
    showSlides(slideIndex = n);
}

// Hides every slide, then shows only the current one
function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides"); // All slide elements
    let dots = document.getElementsByClassName("dot");        // All dot indicators

    // Wrap around: after the last slide, go back to the first
    if (n > slides.length) { slideIndex = 1; }

    // Wrap around: before the first slide, go to the last
    if (n < 1) { slideIndex = slides.length; }

    // Hide all slides
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // Remove the "active" highlight from all dots
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    // Show the current slide and highlight its dot
    // (subtract 1 because arrays start at 0, but slides are numbered from 1)
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}