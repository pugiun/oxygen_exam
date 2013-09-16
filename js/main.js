$(function() {
    $("div.profile-wrap").click( function(){
        $(".info-container.in").collapse('hide');
        $('.profile-wrap').not(this).find('a').addClass('collapsed');
        $('i.active').removeClass('active');
        $('div.selected').removeClass('selected');
        $("img.top:hidden").not(this).css('display','block');
        if ($(this).find('a').hasClass('collapsed')) {
            $(this).find('i').addClass('active');
            $(this).find('img.top').fadeOut();
            $(this).parent().addClass('selected');
        }
        else {
            $(this).find('i').removeClass('active');
            $(this).find('img.top').fadeIn();
            $(this).parent().removeClass('selected');
            $(this).find('a').addClass('collapsed')
        }
    });
    $("div.profile-wrap").mouseenter( function(){
         $(this).find('img.top').fadeOut();
    });
    $("div.profile-wrap").mouseleave( function(){
        if ($(this).find('a').hasClass('collapsed')) {
            $(this).find('img.top').fadeIn();
        }
    });
});