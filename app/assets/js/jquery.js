$(function() {
    $('.text-search').hide();
    $('.search-active').hide();
})
$('.search').on("click", function (e) {
    $('.navber-logo').hide();
    $('.search').hide();
    $('.navbar-menu').hide();
    $('.search-active').show();
    // $(this).find('h4').toggleClass('active');
    // $(this).find('.y').toggle();
})
$('.search2').on("click", function (e) {
       $(this).siblings('.text-search').toggle();
       $('.search-active').show();
    // $(this).find('h4').toggleClass('active');
    // $(this).find('.y').toggle();
})
$('.text-search').on("click", function (e) {
    $('.search-active').hide();
    $('.navber-logo').show();
    $('.search').show();
    $('.navbar-menu').show();
 // $(this).find('h4').toggleClass('active');
 // $(this).find('.y').toggle();
})