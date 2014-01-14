
/* App bar ------------------------------------------------------------------ */

// Constants
var GLOBAL_APP_BAR_ITEMS = 2;
var MAX_APP_BAR_ITEMS = 5;

var addedAppBarItems = [];
var appBarHeight = 54;
var appBarSpace = MAX_APP_BAR_ITEMS - GLOBAL_APP_BAR_ITEMS;

function updateAppBar() {

  $(".js-app-bar .js-icon-added").remove();
  $(".app-bar__extra-items").empty();

  // Grab the hidden app bar icons for the active tab
  addedAppBarItems = [];
  $('.ui-panorama-item-active .js-app-bar-icons li').each( function() {
    addedAppBarItems.push($(this).html());
  });

  var numberAddedItems = addedAppBarItems.length;

  // Clone them in to the app bar
  if (numberAddedItems < appBarSpace) {
    for (var i = 0; i < numberAddedItems; i++) {
      $(".app-bar__items").append('<li class="app-bar__item js-icon-added">' + addedAppBarItems[i] + '</li>');
    }
  } else {
    for (var i = 0; i < appBarSpace; i++) {
      $(".app-bar__items").append('<li class="app-bar__item js-icon-added">' + addedAppBarItems[i] + '</li>');
    }
    for (var i = appBarSpace; i < numberAddedItems; i++) {
      $(".app-bar__extra-items").append(addedAppBarItems[i]);
    }
  }
};
updateAppBar(); // Update it on load as well as swipe

// Get active panel and update app bar on swipe
$('.ui-panorama').on('selectedItemChanged', function(){

  $('.ui-panorama-item-active').removeClass('ui-panorama-item-active')
  $('.ui-panorama').data('obj').getItem($('.ui-panorama').data('obj').opts.currentIndex).addClass('ui-panorama-item-active');

  // Update the app bar
  updateAppBar();
});

// Expand and collapse
$(".js-app-bar-expand").click(function(){
  if($(".app-bar").hasClass("js-app-bar-expanded")) {
    $(".app-bar").animate({height: 54}, 200).removeClass("js-app-bar-expanded");
  } else {
      if (addedAppBarItems.length > appBarSpace) {
        appBarHeight = 80 + (addedAppBarItems.length - appBarSpace)*60;
        $(".app-bar").animate({height: appBarHeight}, 200).addClass("js-app-bar-expanded");
      } else {
      $(".app-bar").animate({height: 80}, 200).addClass("js-app-bar-expanded");
    };
  };
});


/* Panorama ----------------------------------------------------------------- */



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