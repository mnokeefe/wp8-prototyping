$(function(){
  $(".ui-panorama").panorama({
    debug: false,
    clickedWrapperClass: 'ui-panorama-click-wrapper',
    clickedWrapperZindex: 2,
    clickedElementClass: 'ui-panorama-clicked',
    animationDuration: 500,
    animationEasing: 'easeOutExpo',
    titleSelector: 'h1',
    itemsContainerSelector: '.ui-panorama-items',
    itemSelector: '.ui-panorama-item',
    itemsGapPercentage: 10, /* resize 'screens' */
    itemsLeftMarginPercent: 0, /* add margin-left to every screen */
    totalNumberOfItems: 5,
    waitXpercentage: 5, /* prevent any horiaontal move when user moved screen less than 5% */
    waitYpercentage:3, /* prevent any vertical move when user moved screen less than 3% */
    backPointPercentage: 30, /* prevent swipe when user moved screen less than 30% */
    controlInitializedEventName: 'controlInitialized',
    selectedItemChangedEventName: 'selectedItemChanged'
  });
})