$(document).ready(function () {
  $(".a1").click(function () {
    $(".a1").toggleClass("aclick");
    $(".a2").removeClass("aclick");
    $(".a3").removeClass("aclick");
    $(".a4").removeClass("aclick");
    $(".visual1-contents-main2").toggleClass("main2-none");
    $(".visual1-contents-main").removeClass("main1");
  });
});
$(document).ready(function () {
  $(".a2").click(function () {
    $(".a2").toggleClass("aclick");
    $(".a1").removeClass("aclick");
    $(".a3").removeClass("aclick");
    $(".a4").removeClass("aclick");
    $(".visual1-contents-main").toggleClass("main1");
    $(".visual1-contents-main2").removeClass("main2-none");
  });
});
$(document).ready(function () {
  $(".a3").click(function () {
    $(".a3").toggleClass("aclick");
    $(".a1").removeClass("aclick");
    $(".a2").removeClass("aclick");
    $(".a4").removeClass("aclick");
  });
});
$(document).ready(function () {
  $(".a4").click(function () {
    $(".a4").toggleClass("aclick");
    $(".a1").removeClass("aclick");
    $(".a2").removeClass("aclick");
    $(".a3").removeClass("aclick");
  });
});
$(document).ready(function () {
  $(".a1").trigger("click");
});
