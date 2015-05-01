var main = function() {
  $(".btn").click(function(event) {
    $(".container").show();
    $('.container').slideUp(1100);
  });
  

};

$(document).ready(main);


('.icon-menu').click(function() {
  $('.menu').animate({
      width: "193px"
    },
    300);
});