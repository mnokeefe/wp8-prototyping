// Get active panel and update app bar on swipe
$('.ui-panorama').on('selectedItemChanged', function(){
  $('.ui-panorama-item-active').removeClass('ui-panorama-item-active')
  $('.ui-panorama').data('obj').getItem($('.ui-panorama').data('obj').opts.currentIndex).addClass('ui-panorama-item-active');
  $(".js-app-bar .js-icon-added").remove();
  $(".ui-panorama-item-active .js-icon-added").clone().appendTo(".js-app-bar");
})

// Keybinding for desktop
$(document).on("keydown", function (e) {
  // left
  if (e.which == 39) {
    $(".ui-panorama").data('obj').goToNext();
  }
  // right
  if (e.which == 37) {
    $(".ui-panorama").data('obj').goToPrevious();
  }
});