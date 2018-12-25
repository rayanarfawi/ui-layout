$(document).ready(() => {
  const headerHeight = $("header").outerHeight();

  $("main").css({ "margin-top": headerHeight + 5 });

  $(window).scroll(() => {
    if (window.pageYOffset > headerHeight) {
      if (!$("header").hasClass("header-small")) {
        $("header").addClass("header-small");
        $(".search-icon").show();
      }
    } else {
      if ($("header").hasClass("header-small")) {
        $("header").removeClass("header-small");
        $(".search-icon").hide();
      }
    }
  });

  $(".search-icon").on("click", () => {
    $("main .mask").show();
    $("body").css({ overflow: "hidden" });
  });

  $("main .mask").on("click", () => {
    if ($(".sidebar").is(":visible")) {
      $(".sidebar").hide();
      $("main .mask").css({ top: "2.4em" });
    }
    $("main .mask").hide();
    $("body").css({ overflow: "auto" });
  });

  $(".menu-icon").on("click", () => {
    $(".sidebar").show();
    $("main .mask").css({ top: 0 });
    $("main .mask").show();
    $("body").css({ overflow: "hidden" });
  });

  $('.arrow').on('click',(item)=>{
    if($(item.target).hasClass('left-arrow')){
      console.log('left');
    }else{
      console.log('right'); 
    }
  });
  
});
