$(function() {
    $('.text-search').hide();
    $('.search-active').hide();
})
$('.search').on("click", function (e) {
    $('.navber-logo').hide();
    $('.search').hide();
    $('.navbar-menu').hide();
    $('.search-active').show();
    $('.text-search').show();
    // $(this).find('h4').toggleClass('active');
    // $(this).find('.y').toggle();
})
$('.close-img').on("click", function (e) {
    $('.search-active').hide();
    // $('.search-active').hide();
    $('.navber-logo').show();
    $('.search').show();
    $('.navbar-menu').show();
 // $(this).find('h4').toggleClass('active');
 // $(this).find('.y').toggle();
})