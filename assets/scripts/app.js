/* ------- */
/* App bar */
/* ------- */

// Grap contextual icons on load
$(".ui-panorama-item-active .js-icon-added").clone().prependTo(".app-bar__items");

// Get active panel and update app bar on swipe
$('.ui-panorama').on('selectedItemChanged', function(){
  $('.ui-panorama-item-active').removeClass('ui-panorama-item-active')
  $('.ui-panorama').data('obj').getItem($('.ui-panorama').data('obj').opts.currentIndex).addClass('ui-panorama-item-active');
  $(".js-app-bar .js-icon-added").remove();
  $(".ui-panorama-item-active .js-icon-added").clone().prependTo(".app-bar__items");
});


// Expand and collapse
$(".js-app-bar-expand").click(function(){
  if($(".app-bar").hasClass("js-app-bar-collapsed")) {
    $(".app-bar").animate({height:54},200).removeClass("js-app-bar-collapsed");
  } else { 
    $(".app-bar").animate({height:80},200).addClass("js-app-bar-collapsed");
  }
});

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

// Disable selection
(function($){
  $.fn.disableSelection = function() {
    return this
    .attr('unselectable', 'on')
    .css('user-select', 'none')
    .on('selectstart', false);
  };
})(jQuery);
$("body").disableSelection();
