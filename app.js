var main = function() {
  $(".btn").click(function(event) {
    $(".container").show();
    $('.container').slideUp(1100);
  });
  

};

$(document).ready(main);