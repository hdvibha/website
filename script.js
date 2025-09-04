// jQuery required (add <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script> in HTML head)

// Smooth scrolling
$("a[href^='#']").on('click', function(event) {
  event.preventDefault();
  $("html, body").animate({
    scrollTop: $($(this).attr("href")).offset().top
  }, 800);
});

// Highlight active navbar link
$(document).ready(function() {
  let current = window.location.href;
  $("nav ul li a").each(function() {
    if (this.href === current) {
      $(this).addClass("active");
    }
  });
});

// Fade-in effect for sections
$(window).on("scroll", function() {
  $(".resume section, .biodata section").each(function() {
    let top = $(this).offset().top - window.innerHeight + 100;
    if ($(window).scrollTop() > top) {
      $(this).addClass("visible");
    }
  });
});
