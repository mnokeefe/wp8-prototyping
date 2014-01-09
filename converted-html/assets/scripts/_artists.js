$(function(){
  $(".ui-panorama").panorama({
    debug: false,
    animationDuration: 500,
    animationEasing: 'easeOutExpo',
    titleSelector: null,
    itemsContainerSelector: '.ui-panorama-items',
    itemSelector: '.ui-panorama-item',
    backgroundAnimationStep: 0,
    titleAnimationStep: 0,
    itemsGapPercentage: 0,
    itemsLeftMarginPercent: 0,
    controlInitializedEventName: 'controlInitialized',
    selectedItemChangedEventName: 'selectedItemChanged'
  });
})