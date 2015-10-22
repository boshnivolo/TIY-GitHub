// TODO: Make buttons click over to corresponding tabs.
// TODO: Convert buttons into tabs.
// TODO: Add event listener 'click' to each button that changes class to active.
//
// For now make the tab 'repo' always active.

// $(' a[href="#tab1"]').on('click', function (){
//   $(' section#tab1').toggleClass('active').siblings().removeClass('active');
// });
//
// $(' a[href="#tab2"]').on('click', function (){
//   $(' section#tab2').toggleClass('active').siblings().removeClass('active');
// });
//
// $(' a[href="#tab3"]').on('click', function (){
//   $(' section#tab3').toggleClass('active').siblings().removeClass('active');
// });

$('.tabs > a').on('click', function(){
  var panelId = $(this).attr('href');

  $(this).add(panelId)
    .addClass('active')
  .siblings()
    .removeClass('active');

  console.log($(this).siblings());
}).filter('[href="#repositories"]')
  .trigger('click');
