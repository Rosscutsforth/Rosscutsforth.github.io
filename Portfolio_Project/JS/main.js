
$(document).ready(function(){
  $("#twitterNetwork").on("click", function(){
    $("#twitterNetwork").css("display", "none");
    $("#twitterButton").fadeIn(1000);
  });
  $("#twitterButton").mouseleave(function(){
    $("#twitterNetwork").fadeIn(1000);
    $("#twitterButton").css("display", "none");
  });

  $("#nampAbout").on("click", function(){
    $("#nampAbout").css("display", "none");
    $("#nampButton").fadeIn(1000);
  });
  $("#nampButton").mouseleave(function(){
    $("#nampAbout").fadeIn(1000);
    $("#nampButton").css("display", "none");
  });
});
