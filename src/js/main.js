// TODO: Make buttons click over to corresponding tabs.
// TODO: Convert buttons into tabs.
// TODO: Add event listener 'click' to each button that changes class to active.
//
// For now make the tab 'repo' always active.

$(document).ready(function(){
  $('.tabs .tab-links a').on('click', function(e){
    var currentAttrValue = $(this).attr('href');

    // Show/Hide tabs
    $('.tabs ' + currentAttrValue).show().siblings().hide();

    // Change/remove current tab to active
    $(this).parent('button').addClass('active').siblings().removeClass('active');

    e.preventDefault();
  });
});
