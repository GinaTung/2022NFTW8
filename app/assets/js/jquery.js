$(function() {
    $('.text-search').hide();
    $('.search-active').hide();
    $('.add-list').hide();
    $('.remove-list').hide();
    $('.add-list2').hide();
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
$('.add-remove').on("click", function (e) {
    $('.add-list').toggle();
    $(this).find('.y').toggle();
    
})

// $('.add-remove').on("click", function (e) {
//     $('.add-list').toggle();
//     $(this).siblings('.add-list').slideToggle(1000);
//     // $(this).find('h4').toggleClass('active');
//     $(this).find('.img-add').hide();
//     $(this).find('.remove-list').toggle();
    
// })
// $('.add-remove2').on("click", function (e) {
//     $('.add-list2').toggle();
//     $(this).siblings('.add-list2').slideToggle(1000);
//     // $(this).find('h4').toggleClass('active');
//     $(this).find('.y2').toggle();
    
// })