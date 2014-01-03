$(function() {

  // FUNCTIONS
  // ======================================================
  
  function setContentOffset(navSelector, contentSelector) {
    var offsetRef   = $(navSelector)
        , offsetObj = $(contentSelector)
        , refHeight = offsetRef.outerHeight();

    offsetObj.css({ marginTop: refHeight + 'px' });
  }

  function switchTab(tabsSelector, clickedTabId) {
    var activeTab           = $(tabsSelector).find('li.active')
        , activeTabContent  = $('.tab-content.active')
        , clickedTab        = $('#' + clickedTabId)
        , clickedTabContent = $('#' + clickedTabId + '-content');

    activeTab.removeClass('active');
    activeTabContent.removeClass('active');

    clickedTab.addClass('active');
    clickedTabContent.addClass('active');
  }


  // DOCUMENT READY
  // ======================================================

  $(document).ready(function() {
    setContentOffset('.nav-bar', '.wrapper');
  });


  // WINDOW RESIZE
  // ======================================================

  $(window).resize(function() {
    setContentOffset('.nav-bar', '.wrapper');
  });


  // TAB CONTROLS
  // ======================================================

  $('.tabs li').on('click', function() {
    var tabsSelector = $(this).parents('.tabs')
        , clickedTabId = $(this).attr('id');

    switchTab(tabsSelector, clickedTabId);
  });

  $(window).scroll(function() {


    var window_h = $(this).height();
    var sidebar_h = $('.sidebar').height();

    if (window_h > sidebar_h) {

      $('.sidebar-inner').css('top',$(this).scrollTop());

    } else {

      $('.sidebar-inner').css('top',0);

    }


  });


});