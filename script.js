$(document).ready(function(){
  // Show surprise message on home
  $("#showMessage").click(function(){
    $("#message").fadeToggle();
  });

  // Accordion for skills
  $(".acc-btn").click(function(){
    $(this).next(".acc-content").slideToggle();
  });
});