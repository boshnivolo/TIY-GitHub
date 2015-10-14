// TODO: Make buttons click over to corresponding tabs.
// TODO: Convert buttons into tabs.
// TODO: Add event listener 'click' to each button that changes class to active.
//
// For now make the tab 'repo' always active.

$(' a[href="#tab1"]').on('click', function (){
  console.log('tracer 1');
  $(' section#tab1').toggleClass('active').siblings().removeClass('active');
});

$(' a[href="#tab2"]').on('click', function (){
  console.log('tracer 2');
  $(' section#tab2').toggleClass('active').siblings().removeClass('active');
});

$(' a[href="#tab3"]').on('click', function (){
  $(' section#tab3').toggleClass('active').siblings().removeClass('active');
});
