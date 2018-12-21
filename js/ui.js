$(document).ready(()=>{

    const headerHeight = $('header').outerHeight();

    $('main').css({"margin-top":headerHeight+5 });

    $(window).scroll(()=>{
       if(window.pageYOffset>headerHeight){
           if(!$('header').hasClass('header-small')){
                $('header').addClass('header-small')
                $('.search-icon').show();
           }
       }else{
        if($('header').hasClass('header-small')){
            $('header').removeClass('header-small');
            $('.search-icon').hide();
        }
       }
   });

   $('.search-icon').on('click',()=>{

   });

});