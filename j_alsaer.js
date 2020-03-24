$('.btm_mnu_rspnvv').click(function(){
    $('.spc_menu_hdr').fadeToggle();
    $('.clsss').fadeToggle();
    $('.barss').fadeToggle();
    $('.blrrr').toggleClass('blrrr_actvv');
});




$(".box_sliddrrr > div:gt(0)").hide();

setInterval(function() {
  $('.box_sliddrrr > div:first')
    .fadeOut(1000)
    .next(3000)
    .fadeIn(1000)
    .end(3000)
    .appendTo('.box_sliddrrr');
}, 5000);